import { EMonsterTag, EPackConditionType, EPackRewardType, IPack } from "../../types";
import { GameScene } from "../scenes/GameScene";
import { EMonsterId } from "./field/monsters";

export enum EPackId {
    GOLD_1 = "GOLD_1",
}

const allPacks: IPack[] = [
    {
        id: EPackId.GOLD_1,
        type: EPackConditionType.TAG_COUNT,
        conditions: [{ tag: EMonsterTag.RICH, count: 2 }],
        reward: EMonsterId.GOLD_3,
        rewardType: EPackRewardType.ADD_TO_POOL,
    },
];

export class PackController {
    gameScene: GameScene;
    // number of each tag of owned tiles
    tags: Partial<Record<EMonsterTag, number>>;
    // list of all active packs
    packs: Partial<Record<EPackId, boolean>>;

    constructor(scene: GameScene) {
        this.gameScene = scene;
        this.tags = {};
        this.packs = {};
    }

    addTags(tags: EMonsterTag[]) {
        console.log("ADD TAGS", tags);
        tags.forEach((tag) => {
            if (this.tags[tag]) {
                this.tags[tag] += 1;
            } else {
                this.tags[tag] = 1;
            }
        });
        this.checkPacks();
    }

    /** check if new pack is activated */
    checkPacks() {
        allPacks.forEach((pack) => {
            const existingPack = this.packs[pack.id];
            if (!existingPack && this.checkConditions(pack)) {
                this.activatePack(pack.id);
            }
        });
    }

    checkConditions(pack: IPack) {
        let result = true;
        pack.conditions.forEach((condition) => {
            if (!this.tags[condition.tag]) {
                result = false;
                return;
            }

            const tagCount = this.tags[condition.tag] || 0;
            if (tagCount < condition.count) {
                result = false;
                return;
            }
        });

        return result;
    }

    activatePack(packId: EPackId) {
        this.packs[packId] = true;
        console.log("NEW PACK ADDED", packId);

        const pack = allPacks.find((pack) => pack.id === packId);
        if (pack) {
            switch (pack.rewardType) {
                case EPackRewardType.ADD_TO_POOL:
                    {
                        this.gameScene.buyController.addToPool(pack.reward);
                    }
                    break;
                default: {
                    console.log("ERROR! Handler for pack reward type is not found", pack.rewardType);
                }
            }
        }
    }
}
