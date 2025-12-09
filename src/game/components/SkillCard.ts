import { GameObjects } from "phaser";
import { GameScene } from "../scenes/GameScene";
import { EHeroClass, EItemBonusType, EItemType, IHeroSkill, IHeroSkillSet, IItem } from "../../types";
import { HeroItemSlot } from "./HeroItemSlot";
import { getWeaponItemHeroClasses } from "../utils/itemUtils";
import { HeroClassTag } from "./ui/HeroClassTag";
import { IMAGE_ICON_CHAINED } from "../utils/imageLoadUtil";

/** Card to buy from shop  */
export class SkillCard extends Phaser.GameObjects.Container {
    gameScene: GameScene;
    titleText: GameObjects.Text;
    skill: IHeroSkillSet;
    title: string;

    itemSlots: HeroItemSlot[] = [];
    isShowItems: boolean;

    constructor(scene: GameScene, x: number, y: number, skill: IHeroSkillSet) {
        super(scene, x, y);
        this.gameScene = scene;
        this.skill = skill;
        this.render();
    }

    render() {
        if (this.skill.isChained) {
            const chainImage = this.scene.add.image(50, 100, IMAGE_ICON_CHAINED);
            this.add(chainImage);
        }

        //const chainedText = this.skill.isChained ? " (CHAIN)" : "";
        const title = this.skill.name + "\n\n" + this.skill.desc;
        this.titleText = this.scene.add.text(10, 5, title, { fontSize: 14, color: "#dddddd", fontStyle: "bold" });
        this.add(this.titleText);
        // this.titleText.setText(this.skill.name + chainedText + "\n\n" + this.skill.desc);
        //this.titleText.setX(10);

        this.renderTags();
    }

    renderTags() {
        this.skill.heroClasses.forEach((heroClass, index) => {
            const x = index * 60;
            const y = 178;
            const hcTag = new HeroClassTag(this.gameScene, x, y, heroClass);
            this.add(hcTag);
        });
    }

    refresh() {
        this.removeAll(true);
        this.render();
    }
}
