import { mobNoSkill } from "../game/skills/mobSkills";
import { colors } from "./skills_ru";

export const SKILLS_EN = {
    basic: {
        //
        // BARD
        //
        buffBaNextBaAll: {
            name: "Empower all",
            desc1: "Buff all allies +[2]\ndamage of next basic attack",
            desc2: "Buff all allies +[3]\ndamage of next basic attack",
            desc3: "Buff all allies +[4]\ndamage of next basic attack",
        },
        buffBaSelf: {
            name: "Empower one",
            desc1: "Buff random ally\nbasic attack +[1] damage",
            desc2: "Buff random ally\nbasic attack +[2] damage",
            desc3: "Buff random ally\nbasic attack +[3] damage",
        },
        //
        // DARK
        //
        poisonRandom: {
            name: "Posion bite",
            desc1: `[color=${colors.POISON}]Poison [3][/color] random enemy`,
            desc2: `[color=${colors.POISON}]Poison [4][/color] random enemy`,
            desc3: `[color=${colors.POISON}]Poison [6][/color] random enemy`,
        },
        magicAttackX3: {
            name: "Magic missiles",
            desc1: `Deal [color=${colors.MAGIC_ATTACK}][2] magic damage[/color] to\nrandom enemy [2] times`,
            desc2: `Deal [color=${colors.MAGIC_ATTACK}][3] magic damage[/color] to\nrandom enemy [2] times`,
            desc3: `Deal [color=${colors.MAGIC_ATTACK}][3] magic damage[/color] to\nrandom enemy [3] times`,
        },
        //
        // MASTER
        //
        buffNextBaX: {
            name: "Piercing strike",
            desc1: "Multiply next basic attack\nby x[1.4]",
            desc2: "Multiply next basic attack\nby x[1.6]",
            desc3: "Multiply next basic attack\nby x[1.8]",
        },
        feintAttack: {
            name: "Feint attack",
            desc1: `Reduce self basic attack\nby 35% and gain same [color=${colors.ARMOR}]armor[/color]\namount`,
            desc2: `Reduce self basic attack\nby 35% and gain same [color=${colors.ARMOR}]armor[/color]\namount plus [PP*20%]`,
            desc3: `Reduce self basic attack\nby 35% and gain same [color=${colors.ARMOR}]armor[/color]\namount plus [PP*30%]`,
        },
        //
        // MAGIC
        //
        magicAttack: {
            name: "Magic Attack",
            desc1: `Deal [color=${colors.MAGIC_ATTACK}][4] magic damage[/color] to\nfirst enemy`,
            desc2: `Deal [color=${colors.MAGIC_ATTACK}][6+35%xMP] magic\ndamage[/color] to first enemy`,
            desc3: `Deal [color=${colors.MAGIC_ATTACK}][8+50%xMP] magic\ndamage[/color] to first enemy`,
        },
        applyBurn: {
            name: "Flame",
            desc1: `Apply [color=${colors.BURN}][3] burn[/color] to the\nfirst enemy`,
            desc2: `Apply [color=${colors.BURN}][4] burn[/color] to the\nfirst enemy`,
            desc3: `Apply [color=${colors.BURN}][6] burn[/color] to the\nfirst enemy`,
            // Apply [6] burn to the first enemy
        },
        //
        // MASTER + WARRIOR
        //
        phycAttack: {
            name: "Strike",
            desc1: `Deal [color=${colors.PHYSICAL_ATTACK}][4+PPx35%] physical\ndamage[/color] to first enemy`,
            desc2: `Deal [color=${colors.PHYSICAL_ATTACK}][5+PPx50%] physical\ndamage[/color] to first enemy`,
            desc3: `Deal [color=${colors.PHYSICAL_ATTACK}][6+PPx65%] physical\ndamage[/color] to first enemy`,
        },
        phycNBleed: {
            name: "Slashing strike",
            desc1: `Deal [color=${colors.PHYSICAL_ATTACK}][2+PPx35%] physical\ndamage[/color] to first enemy\nand apply [color=${colors.BLEED}][1] bleed[/color]`,
            desc2: `Deal [color=${colors.PHYSICAL_ATTACK}][2+PPx50%] physical\ndamage[/color] to first enemy\nand apply [color=${colors.BLEED}][2] bleed[/color]`,
            desc3: `Deal [color=${colors.PHYSICAL_ATTACK}][2+PPx65%] physical\ndamage[/color] to first enemy\nand apply [color=${colors.BLEED}][3] bleed[/color]`,
        },
        nextBAArea: {
            name: "Cleave",
            desc1: "Reduce next basic attack\nby [35%] but it hits first\n2 eneimes",
            desc2: "Reduce next basic attack\nby [20%] but it hits first\n2 eneimes",
            desc3: "Next basic attack hits\nfirst 2 eneimes",
        },
        //
        // MASTER + WILD
        //
        statusesIntoHeal: {
            name: "Overcome",
            desc1: `Remove [50%] stacks of\nevery status, [color=${colors.HEAL}]recover [2][/color]\nhealth and get [20%] of\nlost hp as [color=${colors.ARMOR}]armor[/color]`,
            desc2: `Remove [65%] stacks of\nevery status, [color=${colors.HEAL}]recover [3][/color]\nhealth and get [25%] of\nlost hp as [color=${colors.ARMOR}]armor[/color]`,
            desc3: `Remove [80%] stacks of\nevery status, [color=${colors.HEAL}]recover [4][/color]\nhealth and get [35%] of\nlost hp as [color=${colors.ARMOR}]armor[/color]`,
            // Очистить [50%] каждого\nнакопленного статуса,\n[color=${colors.HEAL}]восстановить[/color] себе [2]\nздоровья и получить [20%]\nнедостающего здоровья в\nвиде брони
        },
        //
        // ORDER
        //
        attrIncArmorSelf: {
            name: "Bulwark",
            desc1: `[color=${colors.ARMOR}]Armor[/color] self by [3]`,
            desc2: `[color=${colors.ARMOR}]Armor[/color] self by [5]`,
            desc3: `[color=${colors.ARMOR}]Armor[/color] self by [8]`,
        },
        attrAttackSelf: {
            name: "Sharpen",
            desc1: "Increase basic attacks\nby [1]",
            desc2: "Increase basic attacks\nby [2]",
            desc3: "Increase basic attacks\nby [3]",
        },
        //
        // PRIEST
        //
        healFirst: {
            name: "Heal first",
            desc1: `[color=${colors.HEAL}]Heal [3][/color] first ally`,
            desc2: `[color=${colors.HEAL}]Heal [5+35%xMP][/color] first ally`,
            desc3: `[color=${colors.HEAL}]Heal [7+50%xMP][/color] first ally`,
        },
        healSelf: {
            name: "Heal self",
            desc1: `[color=${colors.HEAL}]Heal [4][/color] self`,
            desc2: `[color=${colors.HEAL}]Heal [6+35%xMP][/color] self`,
            desc3: `[color=${colors.HEAL}]Heal [9+50%xMP][/color] self`,
        },
        //
        // SUMMON
        //
        fireflySummon: {
            name: "Firefly",
            desc3: `[color=${colors.SUMMON}]Summon[/color] magic creature [stats]`,
            desc2: `[color=${colors.SUMMON}]Summon[/color] magic creature [stats]`,
            desc1: `[color=${colors.SUMMON}]Summon[/color] magic creature [stats]`,
        },
        prititWarriorSummon: {
            name: "Spirit warrior",
            desc1: `[color=${colors.SUMMON}]Summon[/color] spirit warrior [stats]`,
            desc2: `[color=${colors.SUMMON}]Summon[/color] spirit warrior [stats]`,
            desc3: `[color=${colors.SUMMON}]Summon[/color] spirit warrior [stats]`,
        },
        //
        // WARRIOR
        //
        buffNextBa: {
            name: "Battlecry",
            desc1: "Next basic attack deals\n[4] more damage",
            desc2: "Next basic attack deals\n[5+PPx40%] more damage",
            desc3: "Next basic attack deals\n[6+PPx65%] more damage",
        },
        debuffWorthyFoe: {
            name: "Worthy foe",
            desc1: "Attack enemy with highest\nattack this turn and reduce\nits next attack by [2]\nmake it vulnerable [1]",
            desc2: "Attack enemy with highest\nattack this turn and reduce\nits next attack by [2+PPx35%]\nmake it vulnerable [2]",
            desc3: "Attack enemy with highest\nattack this turn and reduce\nits next attack by [2+PPx50%]\nmake it vulnerable [3]",
        },
        //
        // WILD
        //
        attrIncrHpReg: {
            name: "Regeneration",
            desc1: `Increase [color=${colors.REGEN}]health regen[/color]\nby [1]`,
            desc2: `Increase [color=${colors.REGEN}]health regen[/color]\nby [2]`,
            desc3: `Increase [color=${colors.REGEN}]health regen[/color]\nby [3]`,
        },
        wildBasicTotemSkill: {
            name: "Wild totem",
            desc1: `Summon [color=${colors.TOTEM}]totem[/color] that deals\n[1] damage to random enemy`,
            desc2: `Summon [color=${colors.TOTEM}]totem[/color] that deals\n[2] damage to random enemy`,
            desc3: `Summon [color=${colors.TOTEM}]totem[/color] that deals\n[3] damage to random enemy`,
        },
        //
        // MAGIC + PRIEST
        //
        heatUpSkill: {
            name: "Heat up",
            desc1: `Apply [color=${colors.BURN}][1] burn[/color], increase\nown MP by target's [color=${colors.BURN}]burn[/color]\nfor 2 turns`,
            desc2: `Apply [color=${colors.BURN}][2] burn[/color], increase\nown MP by target's [color=${colors.BURN}]burn[/color]\nfor 2 turns`,
            desc3: `Apply [color=${colors.BURN}][3] burn[/color], increase\nown MP by target's [color=${colors.BURN}]burn[/color]\nfor 2 turns`,
        },
        //
        // BARD + DARK
        //
        toxicTuneSkill: {
            name: "Toxic tune",
            desc1: `Summons totem that\n[color=${colors.POISON}]poisons [1][/color] front enemy`,
            desc2: `Summons totem that\n[color=${colors.POISON}]poisons [1][/color] front enemy,\n[color=${colors.POISON}]poisons [1][/color] random enemy`,
            desc3: `Summons totem that\n[color=${colors.POISON}]poisons [2][/color] front enemy,\n[color=${colors.POISON}]poisons [1][/color] random enemy`,
        },
        //
        // DARK + SUMMON
        //
        venomHeartSkill: {
            name: "Venom heart",
            desc1: "Buff summon's and\nown attacks to apply\n[color=${colors.POISON}][1] poison[/color] for [2] turns",
            desc2: "Buff summon's and\nown attacks to apply\n[color=${colors.POISON}][2] poison[/color] for [2] turns",
            desc3: "Buff summon's and\nown attacks to apply\n[color=${colors.POISON}][2] poison[/color] for [4] turns",
        },
        //
        // BARD + MAGIC
        //
        blindingBeamSkill: {
            name: "Blinding beam",
            desc1: `Deal [color=${colors.MAGIC_ATTACK}][1] magic damage[/color]\nand apply [35+MP] blind\nto enemy for 2 turns`,
            desc2: `Deal [color=${colors.MAGIC_ATTACK}][2] magic damage[/color]\nand apply [35+MP] blind\nto enemy for 2 turns`,
            desc3: `Deal [color=${colors.MAGIC_ATTACK}][3] magic damage[/color]\nand apply [35+MP] blind\nto enemy for 2 turns`,
        },
        //
        // SUMMON + PRIEST
        //
        radiantWallSkill: {
            name: "Holy defender",
            desc1: `[color=${colors.SUMMON}]Summons[/color] defender [stats]\nand for 2 turns\n[color=${colors.HEAL}]overheals[/color] deal damage\nto front enemy. Defender\ndoes not attack but\nget [color=${colors.ARMOR}]armor[/color] for 50% of attack`,
            desc2: `[color=${colors.SUMMON}]Summons[/color] defender [stats]\nand for 2 turns\n[color=${colors.HEAL}]overheals[/color] deal damage\nto front enemy. Defender\ndoes not attack but\nget [color=${colors.ARMOR}]armor[/color] for 50% of attack`,
            desc3: `[color=${colors.SUMMON}]Summons[/color] defender [stats]\nand for 2 turns\n[color=${colors.HEAL}]overheals[/color] deal damage\nto front enemy. Defender\ndoes not attack but\nget [color=${colors.ARMOR}]armor[/color] for 50% of attack`,
        },
    },
    level2: {
        applyShock: {
            name: "Apply shock",
            desc1: `Apply [color=${colors.SHOCK}][1] shock[/color] to the\nfirst enemy`,
            desc2: `Apply [color=${colors.SHOCK}][1] shock[/color] to the\nfirst enemy`,
            desc3: `Apply [color=${colors.SHOCK}][1] shock[/color] to the\nfirst enemy`,
            // Apply [1] shock to the first enemy
        },
        attrIncArmorAll: {
            name: "Barricades",
            desc1: `[color=${colors.ARMOR}]Armor[/color] all [5+20%xPP]`,
            desc2: `[color=${colors.ARMOR}]Armor[/color] all [5+35%xPP]`,
            desc3: `[color=${colors.ARMOR}]Armor[/color] all [5+65%xPP]`,
        },
        attrDescArmor: {
            name: "Entangle of vines",
            desc1: `First enemy lose [color=${colors.ARMOR}][8] armor[/color]`,
            desc2: `First enemy lose [color=${colors.ARMOR}][14] armor[/color]`,
            desc3: `First enemy lose [color=${colors.ARMOR}][26] armor[/color]`,
        },
        buffNextBaBeCritSelf: {
            name: "Perfect strike",
            desc1: "Critical hit with next\nbasic attack and boost\ndamage by [20%xPP]",
            desc2: "Critical hit with next\nbasic attack and boost\ndamage by [2+25%xPP]",
            desc3: "Critical hit with next\nbasic attack and boost\ndamage by [3+35%xPP]",
        },
        buffNextBaTimes: {
            name: "Sword shadow",
            desc1: "Attack +[1] time\nnext 1 round",
            desc2: "Attack +[1] time\nnext 2 rounds",
            desc3: "Attack +[2] times\nnext 1 round",
        },
        buffPpAll: {
            name: "Power of music",
            desc1: "Buff physical power (PP)\nof all allies by [1+MPx50%]",
            desc2: "Buff physical power (PP)\nof all allies by [1+MPx70%]",
            desc3: "Buff physical power (PP)\nof all allies by [1+MP]",
        },
        concentrateThePoison: {
            name: "Amplify poison",
            desc1: `Apply [color=${colors.POISON}]+[50%xMP] poison[/color]\nto enemy with most poison\nand deal [color=${colors.MAGIC_ATTACK}]magical damage[/color]\nequal to total stacks`,
            desc2: `Apply [color=${colors.POISON}]+[65%xMP] poison[/color]\nto enemy with most poison\nand deal [color=${colors.MAGIC_ATTACK}]magical damage[/color]\nequal to total stacks`,
            desc3: `Apply [color=${colors.POISON}]+[75%xMP] poison[/color]\nto enemy with most poison\nand deal [color=${colors.MAGIC_ATTACK}]magical damage[/color]\nequal to total stacks`,
        },
        debuffBaNextBaAll: {
            name: "Weakness",
            desc1: "Debuff next basic attack\nof all enemies by -[1+MPx50%]",
            desc2: "Debuff next basic attack\nof all enemies by -[1+MPx70%]",
            desc3: "Debuff next basic attack\nof all enemies by -[1+MP]",
            // Debuff next basic attack\nof all enemies by [1+MP*50%] 
        },
        healLowHpSkill: {
            name: "Helping hand",
            desc1: `[color=${colors.HEAL}]Heal [5+MPx50%][/color] lowest\nhp ally`,
            desc2: `[color=${colors.HEAL}]Heal [5+MPx75%][/color] lowest\nhp ally`,
            desc3: `[color=${colors.HEAL}]Heal [5+MP][/color] lowest hp ally`,
        },
        incrSummonArmor: {
            name: "Ghost armor",
            desc1: `Increase [color=${colors.SUMMON}]current summon[/color]\n[color=${colors.ARMOR}]armor[/color] by [8+MPx50%]`,
            desc2: `Increase [color=${colors.SUMMON}]current summon[/color]\n[color=${colors.ARMOR}]armor[/color] by [8+MPx75%]`,
            desc3: `Increase [color=${colors.SUMMON}]current summon[/color]\n[color=${colors.ARMOR}]armor[/color] by [8+MP]`,
        },
        incrSummonBa: {
            name: "Ghost sword",
            desc1: `Increase [color=${colors.SUMMON}]current summon[/color]\nbasic attack damage\nby [1+MPx50%]`,
            desc2: `Increase [color=${colors.SUMMON}]current summon[/color]\nbasic attack damage\nby [1+MPx70%]`,
            desc3: `Increase [color=${colors.SUMMON}]current summon[/color]\nbasic attack damage\nby [1+MP]`,
        },
        magicAttackAll: {
            name: "Fire breath",
            desc1: `Deal [color=${colors.MAGIC_ATTACK}][1+MPx20%] magic\ndamage[/color] to all enemies`,
            desc2: `Deal [color=${colors.MAGIC_ATTACK}][1+MPx40%] magic\ndamage[/color] to all enemies`,
            desc3: `Deal [color=${colors.MAGIC_ATTACK}][1+MPx60%] magic\ndamage[/color] to all enemies`,
        },
        noBasicAttackSkill: {
            name: "Chain link",
            desc1: "Chains to the next skill",
            desc2: "Chains to the next skill",
            desc3: "Chains to the next skill",
        },
        removeBuff: {
            name: "Remove buff",
            desc1: "Remove [1] buff from enemy",
            desc2: "Remove [2] buffs from enemy",
            desc3: "Remove [3] buffs from enemy",
        },
        removeDebuff: {
            name: "Remove debuff",
            desc1: "Remove [1] debuff from ally",
            desc2: "Remove [2] debuffs from\nallies",
            desc3: "Remove [3] debuffs from\nallies",
        },
        riposteSkill: {
            name: "Riposte",
            desc1: "Makes preemptive strike\nwith +[1] damage basic\nattack against an enemy\nthat targets him with\nbasic attack",
            desc2: "Makes preemptive strike\nwith +[1+35%xPP] damage\nbasic attack against enemy\nthat targets him with\nbasic attack",
            desc3: "Makes preemptive strike\nwith +[1+65%xPP] damage\nbasic attack against enemy\nthat targets him with\nbasic attack",
        },
    },
    level3: {
        attrArmorBigSelf: {
            name: "Full plate",
            desc1: `[color=${colors.ARMOR}]Armor[/color] self by [5+PPx40%]`,
            desc2: `[color=${colors.ARMOR}]Armor[/color] self by [5+PPx70%]`,
            desc3: `[color=${colors.ARMOR}]Armor[/color] self by [5+PP]`,
        },
        buffSelfMPorPP: {
            name: "Strong link",
            desc1: "Buff self MP or PP [6]\ndepending on which\nattribute is highest",
            desc2: "Buff self MP or PP [12]\ndepending on which\nattribute is highest",
            desc3: "Buff self MP or PP [20]\ndepending on which\nattribute is highest",
        },
        buffSummonCritSkill: {
            name: "Serious threat",
            //desc1: "Командное усиление призывов\nвесь бой шанс критических\nударов +[5+20%x(МС+ФС)]%\nи атаки вызывают кровотечение",
            desc1: `Team-wide buff of [color=${colors.SUMMON}]summons[/color]\nfor the rest of battle\ncrit chance +[5+20%x(MP+PP)]%\nand attacks cause bleed`,
            desc2: `Team-wide buff of [color=${colors.SUMMON}]summons[/color]\nfor the rest of battle\ncrit chance +[7+30%x(MP+PP)]%\nand attacks cause bleed`,
            desc3: `Team-wide buff of [color=${colors.SUMMON}]summons[/color]\nfor the rest of battle\ncrit chance +[10+40%x(MP+PP)]%\nand attacks cause bleed`,
        },
        buffTotalDmgSkill: {
            name: "Battle hymn",
            desc1: "Buff total damage\nby [10+40%xMP]% of allies\naround",
            desc2: "Buff total damage\nby [10+60%xMP]% of allies\naround",
            desc3: "Buff total damage\nby [10+80%xMP]% of allies\naround",
        },
        chainBasicAttackSkill: {
            name: "Fluid strike",
            desc1: "Make a basic attack and\nchain to the next skill",
            desc2: "Make a basic attack and\nchain to the next skill",
            desc3: "Make a basic attack and\nchain to the next skill",
        },
        increaseMaxHpSkill: {
            name: "Nature's growth",
            desc1: `Increase maximum health\nby [5+20%x(MP+PP)] and\n[color=${colors.HEAL}]heal[/color] same amount`,
            desc2: `Increase maximum health\nby [5+30%x(MP+PP)] and\n[color=${colors.HEAL}]heal[/color] same amount`,
            desc3: `Increase maximum health\nby [5+40%x(MP+PP)] and\n[color=${colors.HEAL}]heal[/color] same amount`,
        },
        incrTotemValueSkill: {
            name: "Empower totem",
            desc1: `Increase [color=${colors.TOTEM}]current totem[/color]\nvalues by [1+MPx20%]`,
            desc2: `Increase [color=${colors.TOTEM}]current totem[/color]\nvalues by [1+MPx40%]`,
            desc3: `Increase [color=${colors.TOTEM}]current totem[/color]\nvalues by [1+MPx60%]`,
        },
        magicRain: {
            name: "Magic rain",
            desc1: `Deal [color=${colors.MAGIC_ATTACK}][2] magic damage[/color]\nto random enemy [1+MP*40%]\ntimes`,
            desc2: `Deal [color=${colors.MAGIC_ATTACK}][2] magic damage[/color]\nto random enemy [2+MP*50%]\ntimes`,
            desc3: `Deal [color=${colors.MAGIC_ATTACK}][2] magic damage[/color]\nto random enemy [3+MP*60%]\ntimes`,
        },
        mortalStrikeSkill: {
            name: "Mortal strike",
            desc1: `Next basic attack will\napply [color=${colors.BLEED}][3] bleed[/color] and\n[3] physical vulnerability,\nreduce target's PP & MP\nby [4] for 3 turns`,
            desc2: `Next basic attack will\napply [color=${colors.BLEED}][5] bleed[/color] and\n[5] physical vulnerability,\nreduce target's PP & MP\nby [7] for 3 turns`,
            desc3: `Next basic attack will\napply [color=${colors.BLEED}][8] bleed[/color] and\n[8] physical vulnerability,\nreduce target's PP & MP\nby [11] for 3 turns`,
        },
        outHealBuffSkill: {
            name: "Out heal",
            desc1: `Buff [color=${colors.HEAL}]outgoing heal[/color] by\n[10+40%xMP]% of allies\naround`,
            desc2: `Buff [color=${colors.HEAL}]outgoing heal[/color] by\n[10+60%xMP]% of allies\naround`,
            desc3: `Buff [color=${colors.HEAL}]outgoing heal[/color] by\n[10+80%xMP]% of allies\naround`,
        },
        shieldAttackSkill: {
            name: "Shield bash",
            desc1: `Deal [color=${colors.PHYSICAL_ATTACK}][35%xArmor+30%xPP]\nphysical damage[/color] to first\nenemy`,
            desc2: `Deal [color=${colors.PHYSICAL_ATTACK}][50%xArmor+40%xPP]\nphysical damage[/color] to first\nenemy`,
            desc3: `Deal [color=${colors.PHYSICAL_ATTACK}][65%xArmor+50%xPP]\nphysical damage[/color] to first\nenemy`,
        },
        stealPPorMPSkill: {
            name: "Desiccation",
            desc1: "Steal [4] PP or MP\nfrom highest PP/MP enemy,\ndepending on which\nattribute is highest",
            desc2: "Steal [7] PP or MP\nfrom highest PP/MP enemy,\ndepending on which\nattribute is highest",
            desc3: "Steal [12] PP or MP\nfrom highest PP/MP enemy,\ndepending on which\nattribute is highest",
        },
        meteoriteFall: {
            name: "Meteorite fall",
            desc1: `At the end of the round\ndeals [color=${colors.PHYSICAL_ATTACK}][3+40%xMP] physical\ndamage[/color] to all enemies and\napply [color=${colors.BURN}][3] burn[/color]. Lasts\n[1] round`,
            desc2: `At the end of the round\ndeals [color=${colors.PHYSICAL_ATTACK}][3+70%xMP] physical\ndamage[/color] to all enemies and\napply [color=${colors.BURN}][3] burn[/color]. Lasts\n[2] rounds`,
            desc3: `At the end of the round\ndeals [color=${colors.PHYSICAL_ATTACK}][3+MP] physical\ndamage[/color] to all enemies and\napply [color=${colors.BURN}][3] burn[/color]. Lasts\n[3] rounds`,
        },
    },
    level4: {},
    passives: {
        alchemistPassive: "At the start of\nturn gain +MP equal to\n40% of lost hp for 1 round",
        assassinPassive: "Deal +20% dmg\nto poisoned targets",
        barbarianPassive: "Every incoming\nbasic attack increase regen\nby 1 (max +20)",
        battleMagePassive: "Skills with MP\nscaling get equal PP scaling\nand vice versa (skill with\nboth scaling are not\naffected)",
        beastMasterPassive: "While having totem,\nbuffs targeting summons\nand summoning skills buff\nBeastmaster; while having\nsummon, totem skills\nactivate summon",
        bishopPassive: "Can crit with\nhealing skills",
        blackKnightPassive: "Adds 100% Magic\npower to Physical power",
        bladedancerPassive: "Consecutive basic\nattacks at the same target\nincrease damage by 1; makes\n+1 basic attack after\nevasion, but reduce attack\nby 40%",
        commanderPassive: "Increase all\nsummons' basic attack\ndamage by [2+MPx50%]",
        doomsayerPassive: "Increase potency\nof debuffs by 50%",
        druidPassive: "Deal bonus [35%xPP]\ndamage vs targets\nwith shock",
        duelistPassive: "Add crit.chance\nto evasion and evasion\nto crit.chance",
        exorcistPassive: "After any heal\nskill reduce statuses by 2\non last healed target",
        forestSpiritPassive: "Cannot be healed,\ntrigger 50% hpRegen when\nattacked",
        gladiatorPassive: "Can crit with\nphysical attack skills",
        heraldPassive: "Get +1 PP when allies\nrecieve buffs",
        hunterPassive: "Increase active\nHunter's mark strength\nby 10 after landing a\ncritical hit",
        illusionistPassive: "Once per each\nally, when they die, random\nteam summon dies instead",
        inquisitorPassive: "At the end of turn\ngain armor equal to 30%\nof burn stacks on all\nenemies",
        knightPassive: "Perform physical\nattack for [2+50%xPP] when\nblock or negate damage, and\ngain [1+25%xPP] armor",
        jesterPassive: "Attacks twice\nwith basic attacks for 60%\nof damage",
        mimicPassive: "At the start of\n2nd round summons Copycat\nIt gets atk and hp from\nMP and PP, and may cast\n4th skill of random ally",
        ministrelPassive: "Heal allies that\nrecieve buff for [1]",
        monkPassive: "Healing skills\nadditionally restore 2 hp\nto self and totem activates",
        necromancerPassive: "Gain 3 MP when\nany unit dies",
        oraclePassive: "Gain Armor after\neach evade (1+40%x(MP+PP))",
        paladinPassive: "Heal low hp unit\nwhen block or negate dmg\nfor [2+35%x(PP+MP)]",
        predatorPassive: "Killing enemy\nwith predator's mark\nheals self 25% health and\nincrease PP by 5",
        runecasterPassive: "All armor gained\nfrom skills is increased\nby [50%xMP]",
        samuraiPassive: "Upon death apply\n[ba+PP]x50% bleed to all\nenemies",
        shadowMasterPassive: "Gain 1 hp regen\nwhen any unit dies",
        shamanPassive: "Summons totem\nbefore battle; it uses\nabilities of any other\ntotem skills of Shaman",
        sorcererPassive: "Can crit with\nmagical attack skills",
        warlockPassive: "Every enemy that\ndies with poison stacks\nspread 65% poison to every\nother enemy",
        witchPassive: "Increase MP by\n35% of total bleed on\nall enemies",
        zealotPassive: "Each turn random\nenemy lose 3 hp regen",
        // mobs
        infernoFlyPassive: "Start with 1\npoison & 3 cosmic shield",
        spiritWarriorPassive: "Gain 3 armor\nper turn, if have less\narmor than 35% atk +PP",
    },
    mc: {
        alchemistSkill: {
            name: "Salvation",
            desc1: `Swap hp with low hp ally\nand [color=${colors.HEAL}]heal[/color] self [5+MPx20%]`,
            desc2: `Swap hp with low hp ally\nand [color=${colors.HEAL}]heal[/color] self [5+MPx30%]`,
            desc3: `Swap hp with low hp ally\nand [color=${colors.HEAL}]heal[/color] self [5+MPx40%]`,
        },
        assassinSkill: {
            name: "Poison blade",
            desc1: `Apply [color=${colors.POISON}]poison [1][/color] on basic\nattacks. Target lowest hp\nenemy with next basic attack`,
            desc2: `Apply [color=${colors.POISON}]poison [2][/color] on basic\nattacks. Target lowest hp\nenemy with next basic attack`,
            desc3: `Apply [color=${colors.POISON}]poison [3][/color] on basic\nattacks. Target lowest hp\nenemy with next basic attack`,
        },
        barbarianSkill: {
            name: "Primal shout",
            desc1: `[color=${colors.REGEN}]100% of hp regen[/color] increase\nbasic attack for 2 turns`,
            desc2: `[color=${colors.REGEN}]125% of hp regen[/color] increase\nbasic attack for 3 turns`,
            desc3: `[color=${colors.REGEN}]150% of hp regen[/color] increase\nbasic attack for 4 turns`,
        },
        battleMageSkill: {
            name: "Arcane vortex",
            desc1: `Attack random enemy with\n[color=${colors.PHYSICAL_ATTACK}]physical damage [1+35%xPP][/color]\n1/3 of basic attack becomes\nPP and 1/3 becomes MP for\n2 turns; Make [color=${colors.MAGIC_ATTACK}]magic attacks\nfor [1+35%xMP][/color] instead of\nregular basic attacks`,
            desc2: `Attack random enemy with\n[color=${colors.PHYSICAL_ATTACK}]physical damage [1+50%xPP][/color]\n1/3 of basic attack becomes\nPP and 1/3 becomes MP for\n2 turns; Make [color=${colors.MAGIC_ATTACK}]magic attacks\nfor [1+50%xMP][/color] instead of\nregular basic attacks`,
            desc3: `Attack random enemy with\n[color=${colors.PHYSICAL_ATTACK}]physical damage [1+65%xPP][/color]\n1/3 of basic attack becomes\nPP and 1/3 becomes MP for\n2 turns; Make [color=${colors.MAGIC_ATTACK}]magic attacks\nfor [1+65%xMP][/color] instead of\nregular basic attacks`,
        },
        beastMasterSkill: {
            name: "Murder of crows",
            desc1: `Summon [color=${colors.TOTEM}]crow (totem)[/color]\nthat attacks random\nenemy [color=${colors.PHYSICAL_ATTACK}]for [2][/color]`,
            desc2: `Summon [color=${colors.TOTEM}]crow (totem)[/color]\nthat attacks twice\nrandom enemy [color=${colors.PHYSICAL_ATTACK}]for [2][/color]`,
            desc3: `Summon [color=${colors.TOTEM}]crow (totem)[/color]\nthat attacks three times\nrandom enemy [color=${colors.PHYSICAL_ATTACK}]for [2][/color]`,
        },
        bishopSkill: {
            name: "Chain heal",
            desc1: `[color=${colors.HEAL}]Heals[/color] low hp ally\nfor [2+20%xMP] 3 times`,
            desc2: `[color=${colors.HEAL}]Heals[/color] low hp ally\nfor [2+30%xMP] 3 times`,
            desc3: `[color=${colors.HEAL}]Heals[/color] low hp ally\nfor [2+40%xMP] 3 times`,
        },
        blackKnightSkill: {
            name: "Black shield",
            desc1: "Deflect next [1] enemy\nskill back to the caster",
            desc2: "Deflect next [2] enemy\nskill back to the caster",
            desc3: "Deflect next [3] enemy\nskill back to the caster",
        },
        bladedancerSkill: {
            name: "Dancing sword",
            desc1: `Summon [color=${colors.TOTEM}]sword (totem)[/color]: it\nattacks every turn random\ntarget [color=${colors.PHYSICAL_ATTACK}]for [1+20%x(MP+PP)][/color]\nIt benefits from and\nincreases bladedancer\npassive buff if it has hit\nsame target`,
            desc2: `Summon [color=${colors.TOTEM}]sword (totem)[/color]: it\nattacks every turn random\ntarget [color=${colors.PHYSICAL_ATTACK}]for [1+25%x(MP+PP)][/color]\nIt benefits from and\nincreases bladedancer\npassive buff if it has hit\nsame target`,
            desc3: `Summon [color=${colors.TOTEM}]sword (totem)[/color]: it\nattacks every turn random\ntarget [color=${colors.PHYSICAL_ATTACK}]for [1+35%x(MP+PP)][/color]\nIt benefits from and\nincreases bladedancer\npassive buff if it has hit\nsame target`,
        },
        commanderSkill: {
            name: "Commander horn",
            desc1: `[1] time activates\nrandom [color=${colors.SUMMON}]allied summon[/color]`,
            desc2: `[2] times activates\nrandom [color=${colors.SUMMON}]allied summon[/color]`,
            desc3: `[3] times activates\nrandom [color=${colors.SUMMON}]allied summon[/color]`,
        },
        DivineShield: {
            name: "Divine shield",
            desc1: "Shield self with faith,\nprotecting from attacks\nbelow [5+PPx20%] damage",
            desc2: "Shield self with faith,\nprotecting from attacks\nbelow [7+PPx40%] damage",
            desc3: "Shield self with faith,\nprotecting from attacks\nbelow [10+PPx60%] damage",
        },
        doomsayerSkill: {
            name: "Doom sentence",
            desc1: "Disable next skill of\n1 enemy hero\n(except MC skills)",
            desc2: "Disable next skill of\n2 enemy heroes\n(except MC skills)",
            desc3: "Disable next skill of\n3 enemy heroes\n(except MC skills)",
        },
        druidSkill: {
            name: "Chain lightning",
            desc1: `Apply [color=${colors.SHOCK}][1] shock[/color] to\nrandom enemy 3 times`,
            desc2: `Apply [color=${colors.SHOCK}][1] shock[/color] to\nrandom enemy 4 times`,
            desc3: `Apply [color=${colors.SHOCK}][1] shock[/color] to\nrandom enemy 5 times`,
        },
        duelistSkill: {
            name: "Unfair duel",
            desc1: "Copy random buff from ally\nto self",
            desc2: "Copy random buff from ally\nto self. And may copy next\nbuff casted on an ally",
            desc3: "Copy random buff from ally\nto self. And may copy next\nbuff casted on an ally",
        },
        exorcistSkill: {
            name: "Ritual of exorcism",
            desc1: `Remove [color=${colors.SUMMON}]a summon[/color] and [color=${colors.TOTEM}]a totem[/color]\nfrom enemy team. And for\neach summon or totem in the\nenemy team, [color=${colors.HEAL}]heal[/color] all allies\nfor [25%xMP]`,
            desc2: `Remove [color=${colors.SUMMON}]a summon[/color] and [color=${colors.TOTEM}]a totem[/color]\nfrom enemy team. And for\neach summon or totem in the\nenemy team, [color=${colors.HEAL}]heal[/color] all allies\nfor [1+35%xMP]`,
            desc3: `Remove [color=${colors.SUMMON}]a summon[/color] and [color=${colors.TOTEM}]a totem[/color]\nfrom enemy team. And for\neach summon or totem in the\nenemy team, [color=${colors.HEAL}]heal[/color] all allies\nfor [2+50%xMP]`,
        },
        forestSpititSkill: {
            name: "Flesh sacrifice",
            desc1: `Sacrifice [color=${colors.ARMOR}]all armor[/color]\nto gain [color=${colors.REGEN}][20%xArmor] regen[/color]`,
            desc2: `Sacrifice [color=${colors.ARMOR}]all armor[/color]\nto gain [color=${colors.REGEN}][30%xArmor] regen[/color]`,
            desc3: `Sacrifice [color=${colors.ARMOR}]all armor[/color]\nto gain [color=${colors.REGEN}][40%xArmor] regen[/color]`,
        },
        gladiatorSkill: {
            name: "Spirit of arena",
            desc1: `Place a [color=${colors.TOTEM}]totem[/color] that\neach turn increases\nphysical power by [2]`,
            desc2: `Place a [color=${colors.TOTEM}]totem[/color] that\neach turn increases\nphysical power by [3]`,
            desc3: `Place a [color=${colors.TOTEM}]totem[/color] that\neach turn increases\nphysical power by [4]`,
        },
        heraldSkill: {
            name: "Song of unbreakable",
            desc1: `All allies gain\n[color=${colors.ARMOR}][4+PP] armor[/color]`,
            desc2: `All allies gain\n[color=${colors.ARMOR}][4+200%xPP] armor[/color]`,
            desc3: `All allies gain\n[color=${colors.ARMOR}][4+300%xPP] armor[/color]`,
        },
        hunterSkill: {
            name: "Hunter mark",
            desc1: "Mark second enemy and\ndecrease physical resist\nby -[15]% and basic\nattacks aim him",
            desc2: "Mark second enemy and\ndecrease physical resist\nby -[25]% and basic\nattacks aim him",
            desc3: "Mark second enemy and\ndecrease physical resist\nby -[35]% and basic\nattacks aim him",
        },
        illusionistSkill: {
            name: "Illusion",
            desc1: `[color=${colors.SUMMON}]Summon illusion[/color] that\nuses [color=${colors.MAGIC_ATTACK}]magic attack skills[/color]\nof its master and\ninherits 25% his MP`,
            desc2: `[color=${colors.SUMMON}]Summon illusion[/color] that\nuses [color=${colors.MAGIC_ATTACK}]magic attack skills[/color]\nof its master and\ninherits 35% his MP`,
            desc3: `[color=${colors.SUMMON}]Summon illusion[/color] that\nuses [color=${colors.MAGIC_ATTACK}]magic attack skills[/color]\nof its master and\ninherits 50% his MP`,
        },
        inquisitorSkill: {
            name: "Brand of obedience",
            desc1: `Debuff highest MP enemy\nwith mark that applies\n[color=${colors.BURN}][5] burn[/color] every turn`,
            desc2: `Debuff highest MP enemy\nwith mark that applies\n[color=${colors.BURN}][10] burn[/color] every turn`,
            desc3: `Debuff highest MP enemy\nwith mark that applies\n[color=${colors.BURN}][15] burn[/color] every turn`,
        },
        jesterSkill: {
            name: "Fire fists",
            desc1: `Basic attacks apply\n[color=${colors.BURN}][1+50%xMP] burn[/color]`,
            desc2: `Basic attacks apply\n[color=${colors.BURN}][1+70%xMP] burn[/color]`,
            desc3: `Basic attacks apply\n[color=${colors.BURN}][1+MP] burn[/color]`,
        },
        knightSkill: {
            name: "Knight armor",
            desc1: `Gain [color=${colors.ARMOR}][12+35%xPP] armor[/color]`,
            desc2: `Gain [color=${colors.ARMOR}][15+50%xPP] armor[/color]`,
            desc3: `Gain [color=${colors.ARMOR}][20+65%xPP] armor[/color]`,
        },
        mimicSkill: {
            name: "Mimicry",
            desc1: "Copy 2nd skill of ally",
            desc2: "Copy 2nd skill of ally",
            desc3: "Copy 2nd skill of ally\nCopy 4th skill of random ally",
        },
        minstrelSkill: {
            name: "Double loud",
            desc1: "Increase value of a\nrandom buff on ally by\n[80%]",
            desc2: "Increase value of a\nrandom buff on ally by\n[150%]",
            desc3: "Increase value of a\nrandom buff on ally by\n[220%]",
        },
        monkSkill: {
            name: "Serenity",
            desc1: "Remove negative status\nfrom self.\nRemove debuff from self",
            desc2: "Remove negative status\nfrom self.\nRemove debuff from self x2",
            desc3: "Remove negative status\nfrom self twice.\nRemove debuff from self x2",
        },
        necromancerSkill: {
            name: "Undead call",
            desc1: `Summon a skeleton [stats1]\nif one or less ally in front\nor skeletal mage [stats2]\notherwise`,
            desc2: `Summon a skeleton [stats1]\nif one or less ally in front\nor skeletal mage [stats2]\notherwise`,
            desc3: `Summon a skeleton [stats1]\nif one or less ally in front\nor skeletal mage [stats2]\notherwise`,
        },
        oracleSkill: {
            name: "Destiny whisper",
            desc1: "Evade next attack.\nRemove next debuff.",
            desc2: "Evade next 2 attacks.\nRemove next debuff.",
            desc3: "Evade next 2 attacks.\nRemove 2 next debuffs.",
        },
        predatorSkill: {
            name: "Victim trace",
            desc1: "Mark low hp enemy\nand decrease its physical\nresistance by -[15]%.\nTarget marked enemy\nwith basic attacks",
            desc2: "Mark low hp enemy\nand decrease its physical\nresistance by -[25]%.\nTarget marked enemy\nwith basic attacks",
            desc3: "Mark low hp enemy\nand decrease its physical\nresistance by -[35]%.\nTarget marked enemy\nwith basic attacks",
        },
        runecasterSkill: {
            name: "Fire shield",
            desc1: `Shield self with magic fire\nthat apply [color=${colors.BURN}][1+50%xMP] burn[/color]\nto every attacker`,
            desc2: `Shield self with magic fire\nthat apply [color=${colors.BURN}][1+70%xMP] burn[/color]\nto every attacker`,
            desc3: `Shield self with magic fire\nthat apply [color=${colors.BURN}][1+MP] burn[/color]\nto every attacker`,
        },
        samuraiSkill: {
            name: "Sharp blade",
            desc1: `Basic attacks apply\n[color=${colors.BLEED}][2] bleed[/color]`,
            desc2: `Basic attacks apply\n[color=${colors.BLEED}][3] bleed[/color]`,
            desc3: `Basic attacks apply\n[color=${colors.BLEED}][4] bleed[/color]`,
        },
        shadowMasterSkill: {
            name: "Unholy pact",
            desc1: `Apply buff that allows\nto use [color=${colors.HEAL}]heal[/color] skills as\n[color=${colors.MAGIC_ATTACK}]damage[/color] skills with [+15%]\ndamage increase`,
            desc2: `Apply buff that allows\nto use [color=${colors.HEAL}]heal[/color] skills as\n[color=${colors.MAGIC_ATTACK}]damage[/color] skills with [+30%]\ndamage increase`,
            desc3: `Apply buff that allows\nto use [color=${colors.HEAL}]heal[/color] skills as\n[color=${colors.MAGIC_ATTACK}]damage[/color] skills with [+45%]\ndamage increase`,
        },
        shamanTotemEmpower: {
            name: "Rite of worship",
            desc1: `Increase [color=${colors.TOTEM}]all totems'[/color] values\nby [MPx50%]`,
            desc2: `Increase [color=${colors.TOTEM}]all totems'[/color] values\nby [MPx70%]`,
            desc3: `Increase [color=${colors.TOTEM}]all totems'[/color] values\nby [MP]`,
        },
        sorcererSkill: {
            name: "Storm",
            desc1: `Deal [color=${colors.MAGIC_ATTACK}][5+MPx30%] magic\ndamage[/color] to first 2 enemies`,
            desc2: `Deal [color=${colors.MAGIC_ATTACK}][5+MPx30%] magic\ndamage[/color] to first 3 enemies`,
            desc3: `Deal [color=${colors.MAGIC_ATTACK}][5+MPx30%] magic\ndamage[/color] to all enemies`,
        },
        warlockSkill: {
            name: "Curse the mighty",
            desc1: `Curse highest attack enemy\nfor -[20]% attack damage\nApply [color=${colors.POISON}][1+MPx50%] poison[/color]`,
            desc2: `Curse highest attack enemy\nfor -[20]% attack damage\nApply [color=${colors.POISON}][1+MP] poison[/color]`,
            desc3: `Curse highest attack enemy\nfor -[20]% attack damage\nApply [color=${colors.POISON}][1+MPx150%] poison[/color]`,
        },
        witchSkill: {
            name: "Curse circle",
            desc1: `Apply [color=${colors.BLEED}][1+MPx50%] bleed[/color]\nto all enemies`,
            desc2: `Apply [color=${colors.BLEED}][1+MPx70%] bleed[/color]\nto all enemies`,
            desc3: `Apply [color=${colors.BLEED}][1+MP] bleed[/color]\nto all enemies`,
        },
        zealotSkill: {
            name: "Antiheal",
            desc1: `Curse first enemy with\nantiheal which transforms\nnext [color=${colors.HEAL}]incoming heal[/color] into\ndamage`,
            desc2: `Curse first 2 enemies\nwith antiheal which\ntransforms next [color=${colors.HEAL}]incoming\nheal[/color] into damage`,
            desc3: `Curse first 3 enemies\nwith antiheal which\ntransforms next [color=${colors.HEAL}]incoming\nheal[/color] into damage`,
        },
    },
    mobs: {
        mobNoSkill: {
            name: "No skill",
            desc1: "Skip casting.\nUse basic attack",
            desc2: "Skip casting.\nUse basic attack",
            desc3: "Skip casting.\nUse basic attack",
        },
        goblinShamanHpRegIncr: {
            name: "Goblin regeneration",
            desc1: `Increase [color=${colors.REGEN}]regen by [1][/color]\nfor all allies`,
            desc2: `Increase [color=${colors.REGEN}]regen by [2][/color]\nfor all allies`,
            desc3: `Increase [color=${colors.REGEN}]regen by [3][/color]\nfor all allies`,
        },
        goblinPocketSand: {
            name: "Pocket sand",
            desc1: "Blind first enemy for\n[40+PP] (1 turn) and\nincrease own next basic\nattack by [2+50%xPP]",
            desc2: "Blind first enemy for\n[50+1.4xPP] (1 turn) and\nincrease own next basic\nattack by [2+75%xPP]",
            desc3: "Blind first enemy for\n[60+1.8xPP] (1 turn) and\nincrease own next basic\nattack by [2+PP]",
        },
        goblinApplyShock: {
            name: "Goblin shock",
            desc1: `Apply [color=${colors.SHOCK}][1] shock[/color] to the\nenemy with [color=${colors.SHOCK}]most shock[/color] or\na random enemy`,
            desc2: `Apply [color=${colors.SHOCK}][2] shock[/color] to the\nenemy with [color=${colors.SHOCK}]most shock[/color] or\na random enemy`,
            desc3: `Apply [color=${colors.SHOCK}][3] shock[/color] to the\nenemy with [color=${colors.SHOCK}]most shock[/color] or\na random enemy`,
        },
        skeletonUnholyLeap: {
            name: "Vile leap",
            desc1: `Attacks enemy with lowest\nhealth percent [color=${colors.PHYSICAL_ATTACK}]physically\nfor [3+35%xPP][/color] and apply\n[color=${colors.POISON}][1+20%xPP] poison[/color]`,
            desc2: `Attacks enemy with lowest\nhealth percent [color=${colors.PHYSICAL_ATTACK}]physically\nfor [4+65%xPP][/color] and apply\n[color=${colors.POISON}][2+40%xPP] poison[/color]`,
            desc3: `Attacks enemy with lowest\nhealth percent [color=${colors.PHYSICAL_ATTACK}]physically\nfor [5+PP][/color] and apply\n[color=${colors.POISON}][3+60%xPP] poison[/color]`,
        },
        skeletonArmorSelfAndLow: {
            name: "Decayed shell",
            desc1: `[color=${colors.ARMOR}]Armor[/color] self and low Hp ally\nfor [color=${colors.ARMOR}][4+20%xPP][/color]`,
            desc2: `[color=${colors.ARMOR}]Armor[/color] self and low Hp ally\nfor [color=${colors.ARMOR}][6+50%xPP][/color]`,
            desc3: `[color=${colors.ARMOR}]Armor[/color] self and low Hp ally\nfor [color=${colors.ARMOR}][8+PP][/color]`,
        },
        poisonedFlames: {
            name: "Poisoned flames",
            desc1: `Attack random enemy with\n[color=${colors.MAGIC_ATTACK}]nmagic [6+35%xMP][/color] and apply\n[color=${colors.POISON}][2] poison[/color] and [color=${colors.BURN}][2] burn[/color]`,
            desc2: `Attack random enemy with\n[color=${colors.MAGIC_ATTACK}]magic [8+65%xMP][/color] and apply\n[color=${colors.POISON}][3] poison[/color] and [color=${colors.BURN}][3] burn[/color]`,
            desc3: `Attack random enemy with\n[color=${colors.MAGIC_ATTACK}]magic [10+MP][/color] and apply\n[color=${colors.POISON}][4] poison[/color] and [color=${colors.BURN}][4] burn[/color]`,
        },
        goldGoblinBuff: {
            name: "High morale",
            desc1: `Increase next basic attack\nof all allies by [1] and\nthey gain [color=${colors.ARMOR}][1] armor[/color]`,
            desc2: `Increase next basic attack\nof all allies by [2] and\nthey gain [color=${colors.ARMOR}][2] armor[/color]`,
            desc3: `Increase next basic attack\nof all allies by [3] and\nthey gain [color=${colors.ARMOR}][3] armor[/color]`,
        },
        lastStandSkill: {
            name: "Last stand",
            desc1: `If all allies are dead,\nincrease Hp by [5+50%xPP]\nIf there's one or less\nallies in front\nget +[1] attack and\n[color=${colors.REGEN}]+[1] regen[/color]`,
            desc2: `If all allies are dead,\nincrease Hp by [7+60%xPP]\nIf there's one or less\nallies in front\nget +[2] attack and\n[color=${colors.REGEN}]+[2] regen[/color]`,
            desc3: `If all allies are dead,\nincrease Hp by [10+75%xPP]\nIf there's one or less\nallies in front\nget +[3] attack and\n[color=${colors.REGEN}]+[3] regen[/color]`,
        },
        peasantsStrongTogetherSkill: {
            name: "Strong together",
            desc1: `Ally behind get +[3] crit\nAlly in front get +[3] maxHp\nIf none alive, strike\n[color=${colors.PHYSICAL_ATTACK}][5+50%xPP] physical attack[/color]`,
            desc2: `Ally behind get +[4] crit\nAlly in front get +[4] maxHp\nIf none alive, strike\n[color=${colors.PHYSICAL_ATTACK}][6+65%xPP] physical attack[/color]`,
            desc3: `Ally behind get +[5] crit\nAlly in front get +[5] maxHp\nIf none alive, strike\n[color=${colors.PHYSICAL_ATTACK}][7+80%xPP] physical attack[/color]`,
        },
        regularWolfSkill: {
            name: "Claws and fangs",
            desc1: `Attack two random enemies\ndealing [color=${colors.PHYSICAL_ATTACK}][1+20%xPP] physical\ndamage[/color] and [color=${colors.BLEED}][1] bleed[/color] each`,
            desc2: `Attack two random enemies\ndealing [color=${colors.PHYSICAL_ATTACK}][2+30%xPP] physical\ndamage[/color] and [color=${colors.BLEED}][1] bleed[/color] each`,
            desc3: `Attack two random enemies\ndealing [color=${colors.PHYSICAL_ATTACK}][2+40%xPP] physical\ndamage[/color] and [color=${colors.BLEED}][2] bleed[/color] each`,
        },
        fireflyConfusingMist: {
            name: "Confusing mist",
            desc1: `Blind [20] all enemies\nuntil they take attack\nRandom [20%xMP] allies\napply [color=${colors.SHOCK}][1] shock[/color] with\nnext basic attack`,
            desc2: `Blind [25] all enemies\nuntil they take attack\nRandom [25%xMP] allies\napply [color=${colors.SHOCK}][1] shock[/color] with\nnext basic attack`,
            desc3: `Blind [35] all enemies\nuntil they take attack\nRandom [35%xMP] allies\napply [color=${colors.SHOCK}][1] shock[/color] with\nnext basic attack`,
        },
        spiritTeamFlurry: {
            name: "Pointy sticks",
            desc1: `Unleash [35%xPP] plus number\nof teammates times attacks\nfor [color=${colors.PHYSICAL_ATTACK}][1] physical damage[/color]\nAnd if none allies alive,\nstrike two enemies with\n[color=${colors.PHYSICAL_ATTACK}]physical damage[/color] equal\nbase attack`,
            desc2: `Unleash [50%xPP] plus number\nof teammates times attacks\nfor [color=${colors.PHYSICAL_ATTACK}][1] physical damage[/color]\nAnd if none allies alive,\nstrike two enemies with\n[color=${colors.PHYSICAL_ATTACK}]physical damage[/color] equal\nbase attack`,
            desc3: `Unleash [65%xPP] plus number\nof teammates times attacks\nfor [color=${colors.PHYSICAL_ATTACK}][1] physical damage[/color]\nAnd if none allies alive,\nstrike two enemies with\n[color=${colors.PHYSICAL_ATTACK}]physical damage[/color] equal\nbase attack`,
        },
        spiritTeamRevenge: {
            name: "Revenge poke",
            desc1: `Next enemy that uses\nbasic attack will provoke\nrevenge basic attack and\nget [color=${colors.BLEED}][1+35%xPP] bleed[/color]`,
            desc2: `Next enemy that uses\nbasic attack will provoke\nrevenge basic attack and\nget [color=${colors.BLEED}][1+65%xPP] bleed[/color]`,
            desc3: `Next enemy that uses\nbasic attack will provoke\nrevenge basic attack and\nget [color=${colors.BLEED}][1+PP] bleed[/color]`,
        },
        pirateDeadmansCurse: {
            name: "Deadmans curse",
            desc1: "Random enemy gets blind\nstacks x[1.0] number of\nbuffs in his team plus\n[20%xPP+20%xMP] and gets\n[1] vulnerability for the\nrest of the duel",
            desc2: "Random enemy gets blind\nstacks x[1.5] number of\nbuffs in his team plus\n[30%xPP+30%xMP] and gets\n[1] vulnerability for the\nrest of the duel",
            desc3: "Random enemy gets blind\nstacks x[2.0] number of\nbuffs in his team plus\n[40%xPP+40%xMP] and gets\n[1] vulnerability for the\nrest of the duel",
        },
        pirateDragNDrown: {
            name: "Drag and drown",
            desc1: "Random enemy gets\n-[3] attack, -[3] PP & MP\nfor 2 turns",
            desc2: "Random enemy gets\n-[4] attack, -[5] PP & MP\nfor 2 turns",
            desc3: "Random enemy gets\n-[5] attack, -[7] PP & MP\nfor 2 turns",
        },
        pirateCallTheCannons: {
            name: "Call cannons",
            desc1: `Deal [color=${colors.PHYSICAL_ATTACK}][4] physical damage[/color]\nand apply [color=${colors.BURN}][2] burn[/color] and\n[color=${colors.BLEED}][2] bleed[/color] to all enemies`,
            desc2: `Deal [color=${colors.PHYSICAL_ATTACK}][6] physical damage[/color]\nand apply [color=${colors.BURN}][2] burn[/color] and\n[color=${colors.BLEED}][2] bleed[/color] to all enemies`,
            desc3: `Deal [color=${colors.PHYSICAL_ATTACK}][8] physical damage[/color]\nand apply [color=${colors.BURN}][3] burn[/color] and\n[color=${colors.BLEED}][3] bleed[/color] to all enemies`,
        },
    },
};
