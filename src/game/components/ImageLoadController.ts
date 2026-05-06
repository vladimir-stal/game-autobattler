import { GameScene } from "../scenes/GameScene";
import { getTotemIdsBySkill, getUnitIdsBySkill, loadTotemImagesForDuel, loadUnitImagesForDuel, loadUnitImagesForSelect } from "../utils/imageLoadUtil";
import { getMainUnitId } from "../utils/unitUtils";

export class ImageLoadController {
    gameScene: GameScene;

    loadedUnits: Record<string, boolean>; // ids of units which idle animation spritesheet images are already loaded
    loadedBattleUnits: Record<string, boolean>; // ids of units which battle animations spritesheets images are already loaded
    loadedBattleSkills: Record<string, boolean>; // ids of skill which battle animations spritesheets images are already loaded
    loadedBattleTotems: Record<string, boolean>; // ids of totems which battle animations spritesheets images are already loaded

    loadedImages: Record<string, boolean>; // ids of all loaded images

    constructor(scene: GameScene) {
        this.gameScene = scene;
        this.loadedUnits = {};
        this.loadedBattleUnits = {};
        this.loadedBattleSkills = {};
        this.loadedBattleTotems = {};
        this.loadedImages = {};
        //this.init();
    }

    //init() {}

    async loadIdleUnits(unitIds: string[]) {
        console.log("loadIdleUnits", unitIds);
        return await Promise.all(
            unitIds.map((unitId) => {
                return this.loadIdleUnit(unitId);
            }),
        );
    }

    async loadBattleUnits(unitIds: string[]) {
        console.log("loadBattleUnits", unitIds);
        return await Promise.all(
            unitIds.map((unitId) => {
                return this.loadBattleUnit(unitId);
            }),
        );
    }

    async loadBattleSkills(skillIds: string[]) {
        const unitIds: string[] = [];
        const totemIds: string[] = [];
        skillIds.forEach((skillId) => {
            const unitIdsForSkill = getUnitIdsBySkill(skillId);
            unitIdsForSkill.forEach((unitId) => {
                if (unitIds.includes(unitId)) {
                    return;
                }
                unitIds.push(unitId);
            });
            const totemIdsForSkill = getTotemIdsBySkill(skillId);
            totemIdsForSkill.forEach((totemId) => {
                if (totemIds.includes(totemId)) {
                    return;
                }
                totemIds.push(totemId);
            });
        });

        console.log("units for skills", unitIds);
        console.log("totems for skills", totemIds);

        return await Promise.all(
            unitIds
                .map((unitId) => {
                    return this.loadBattleUnit(unitId);
                })
                .concat(
                    totemIds.map((totemId) => {
                        return this.loadBattleTotem(totemId);
                    }),
                ),
        );
    }

    private async loadIdleUnit(unitId: string) {
        const initUnitId = getMainUnitId(unitId);

        if (this.loadedUnits[initUnitId]) {
            return;
        }

        await loadUnitImagesForSelect(this.gameScene, initUnitId, this.loadedImages);
        this.loadedUnits[initUnitId] = true;
    }

    private async loadBattleUnit(unitId: string) {
        const initUnitId = getMainUnitId(unitId);
        console.log("loadBattleUnit", unitId, initUnitId);
        if (this.loadedBattleUnits[initUnitId]) {
            return;
        }

        await loadUnitImagesForDuel(this.gameScene, initUnitId, this.loadedImages);
        this.loadedBattleUnits[initUnitId] = true;
    }

    private async loadBattleTotem(totemId: string) {
        if (this.loadedBattleTotems[totemId]) {
            return;
        }

        await loadTotemImagesForDuel(this.gameScene, totemId);
        this.loadedBattleTotems[totemId] = true;
    }

    // private async loadBattleSkill(skillId: string, skillAnimationId: string) {
    //     // if (this.loadedBattleSkills[skillAnimationId]) {
    //     //     return;
    //     // }

    //     const unitIds = getUnitIdsBySkill(skillId);

    //     const units = await loadSkillUnitImagesForDuel(this.gameScene, skillId);
    //     this.loadedBattleUnits[unitId] = true;
    // }
}
