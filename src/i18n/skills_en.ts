export const SKILLS_EN = {
    basic: {
        //
        // BARD
        //
        buffBaNextBaAll: {
            name: "Buff BA all",
            desc1: "Buff next basic attack for [2] damage for all allies",
            desc2: "Buff next basic attack for [3] damage for all allies",
            desc3: "Buff next basic attack for [4] damage for all allies",
        },
        buffBaSelf: {
            name: "Buff self BA",
            desc1: "Buff self basic attack [1]",
            desc2: "Buff self basic attack [2]",
            desc3: "Buff self basic attack [3]",
        },
        //
        // DARK
        //
        poisonRandom: {
            name: "Posion random",
            desc1: "Poison [3] random enemy",
            desc2: "Poison [4] random enemy",
            desc3: "Poison [6] random enemy",
        },
        magicAttackX3: {
            name: "Magic missiles",
            desc1: "Deal [2] magic damage \nto random enemy 3 times",
            desc2: "Deal [3] magic damage \nto random enemy 3 times",
            desc3: "Deal [4] magic damage \nto random enemy 3 times",
        },
        //
        // MASTER
        //
        buffNextBaX: {
            name: "Next BAx buff",
            desc1: "Multiply x[1.4] self next basic attack",
            desc2: "Multiply x[1.6] self next basic attack",
            desc3: "Multiply x[1.8] self next basic attack",
        },
        feintAttack: {
            name: "Feint attack",
            desc1: "Reduce self basic attack\nby 35% and gain same armor\namount",
            desc2: "Reduce self basic attack\nby 35% and gain same armor\namount plus [PP*20%]",
            desc3: "Reduce self basic attack\nby 35% and gain same armor\namount plus [PP*30%]",
        },
        //
        // MAGIC
        //
        magicAttack: {
            name: "Magic Attack",
            desc1: "Deal [5] magic damage to first enemy",
            desc2: "Deal [7] magic damage to first enemy",
            desc3: "Deal [9] magic damage to first enemy",
        },
        applyBurn: {
            name: "Apply Burn",
            desc1: "Apply [3] burn on the first enemy",
            desc2: "Apply [4] burn on the first enemy",
            desc3: "Apply [6] burn on the first enemy",
        },
        //
        // MASTER + WARRIOR
        //
        phycAttack: {
            name: "Phys Attack",
            desc1: "Deal [4+PPx35%] physical\ndamage to first enemy",
            desc2: "Deal [5+PPx50%] physical\ndamage to first enemy",
            desc3: "Deal [6+PPx65%] physical\ndamage to first enemy",
        },
        phycNBleed: {
            name: "PhysNBleed Attack",
            desc1: "Deal [2+PPx35%] physical\ndamage to first enemy\nand apply [1] bleed",
            desc2: "Deal [2+PPx50%] physical\ndamage to first enemy\nand apply [2] bleed",
            desc3: "Deal [2+PPx65%] physical\ndamage to first enemy\nand apply [3] bleed",
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
            desc1: "Remove [50%] stacks of\nevery status, heal same\namount",
            desc2: "Remove [65%] stacks of\nevery status, heal same\namount",
            desc3: "Remove [80%] stacks of\nevery status, heal same\namount",
        },
        //
        // ORDER
        //
        attrIncArmorSelf: {
            name: "Armor self",
            desc1: "Armor self [3]",
            desc2: "Armor self [5]",
            desc3: "Armor self [8]",
        },
        attrAttackSelf: {
            name: "Incr Attack self",
            desc1: "Increase self attack [1]",
            desc2: "Increase self attack [2]",
            desc3: "Increase self attack [3]",
        },
        //
        // PRIEST
        //
        healFirst: {
            name: "Heal first",
            desc1: "Heal [3] first ally",
            desc2: "Heal [5+35%xMP] first ally",
            desc3: "Heal [7+50%xMP] first ally",
        },
        healSelf: {
            name: "Heal self",
            desc3: "Heal [9+50%xMP] self",
            desc2: "Heal [6+35%xMP] self",
            desc1: "Heal [4] self",
        },
        //
        // SUMMON
        //
        fireflySummon: {
            name: "Firefly Summon",
            desc3: "Summon magic creature [stats]",
            desc2: "Summon magic creature [stats]",
            desc1: "Summon magic creature [stats]",
        },
        prititWarriorSummon: {
            name: "Summon spirit warrior",

            desc1: "Summon spirit warrior [stats]",
            desc2: "Summon spirit warrior [stats]",
            desc3: "Summon spirit warrior [stats]",
        },
        //
        // WARRIOR
        //
        buffNextBa: {
            name: "Next BA+ buff",
            desc1: "Buff [4] self next basic attack",
            desc2: "Buff [6]+[PPx30%] self next basic attack",
            desc3: "Buff [8]+[PPx30%] self next basic attack",
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
            name: "Wild regen",
            desc1: "Increase self hp regen [1]",
            desc2: "Increase self hp regen [2]",
            desc3: "Increase self hp regen [3]",
        },
        wildBasicTotemSkill: {
            name: "Wild totem",
            desc1: "Summon totem that deals \n[1] damage to random enemy",
            desc2: "Summon totem that deals \n[2] damage to random enemy",
            desc3: "Summon totem that deals \n[3] damage to random enemy",
        },
        //
        // MAGIC + PRIEST
        //
        heatUpSkill: {
            name: "Heat up",
            desc1: "Apply [1] burn, increase own MP by target's burn for 2 turns",
            desc2: "Apply [2] burn, increase own MP by target's burn for 2 turns",
            desc3: "Apply [3] burn, increase own MP by target's burn for 2 turns",
        },
        //
        // BARD + DARK
        //
        toxicTuneSkill: {
            name: "Toxic tune",
            desc1: "Summons totem that\n poisons [1] front enemy",
            desc2: "Summons totem that\n poisons [1] front enemy\n and [1] random enemy",
            desc3: "Summons totem that\n poisons [2] front enemy",
        },
        //
        // DARK + SUMMON
        //
        venomHeartSkill: {
            name: "Venom heart",
            desc1: "Buff summon's and\nown attacks to apply\n[1] poison for [2] turns",
            desc2: "Buff summon's and\nown attacks to apply\n[2] poison for [2] turns",
            desc3: "Buff summon's and\nown attacks to apply\n[2] poison for [4] turns",
        },
        //
        // BARD + MAGIC
        //
        blindingBeamSkill: {
            name: "Blinding beam",
            desc1: "Deal [1] magic damage\nand apply [35+MP] blind\nto enemy for 2 turns",
            desc2: "Deal [2] magic damage\nand apply [35+MP] blind\nto enemy for 2 turns",
            desc3: "Deal [3] magic damage\nand apply [35+MP] blind\nto enemy for 2 turns",
        },
        //
        // SUMMON + PRIEST
        //
        radiantWallSkill: {
            name: "Radiant wall",
            desc1: "Summons defender [stats]\nand for 2 turns\noverheals deal damage\nto front enemy. Defender\ndoes not attack but\nget armor for 50% of attack",
            desc2: "Summons defender [stats]\nand for 2 turns\noverheals deal damage\nto front enemy. Defender\ndoes not attack but\nget armor for 50% of attack",
            desc3: "Summons defender [stats]\nand for 2 turns\noverheals deal damage\nto front enemy. Defender\ndoes not attack but\nget armor for 50% of attack",
        },
    },
    level2: {
        applyShock: {
            name: "Apply Shock",
            desc1: "Apply [1] shock to the first enemy",
            desc2: "Apply [1] shock to the first enemy",
            desc3: "Apply [1] shock to the first enemy",
        },
        attrIncArmorAll: {
            name: "Barricades",
            desc1: "Armor all [5 + 20% PP]",
            desc2: "Armor all [5 + 35% PP]",
            desc3: "Armor all [5 + 65% PP]",
        },
        attrDescArmor: {
            name: "Entangle of vines",
            desc1: "Break [8] armor to first enemy",
            desc2: "Break [14] armor to first enemy",
            desc3: "Apply [26] shock to the first enemy",
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
            name: "Buff PP all",
            desc1: "Buff Physical power\n[1]+[MP*50%] all allies",
            desc2: "Buff Physical power\n[1]+[MP*70%] all allies",
            desc3: "Buff Physical power\n[1]+[MP] all allies",
        },
        concentrateThePoison: {
            name: "Amplify poison",
            desc1: "Apply +[50%xMP] poison\nto enemy with most poison\nand deal magical damage\nequal to total stacks",
            desc2: "Apply +[65%xMP] poison\nto enemy with most poison\nand deal magical damage\nequal to total stacks",
            desc3: "Apply +[75%xMP] poison\nto enemy with most poison\nand deal magical damage\nequal to total stacks",
        },
        debuffBaNextBaAll: {
            name: "Weakness",
            desc1: "Debuff next basic attack [1]+[MP*50%] all enemies",
            desc2: "Debuff next basic attack [1]+[MP*70%] all enemies",
            desc3: "Debuff next basic attack [1]+[MP] all enemies",
        },
        healLowHpSkill: {
            name: "Heal Low Hp",
            desc1: "Heal [5]+[MP*50%] lowest hp ally",
            desc2: "Heal [5]+[MP*75%] lowest hp ally",
            desc3: "Heal [4]+[MP] lowest hp ally",
        },
        incrSummonArmor: {
            name: "Increase summon armor",
            desc1: "Increase current summon armor [8]+[MP*50%]",
            desc2: "Increase current summon armor [8]+[MP*75%]",
            desc3: "Increase current summon armor [8]+[MP]",
        },
        incrSummonBa: {
            name: "Increase summon attack",
            desc1: "Increase current summon basic attack damage [1]+[MP*50%]",
            desc2: "Increase current summon basic attack damage [1]+[MP*70%]",
            desc3: "Increase current summon basic attack damage [1]+[MP]",
        },
        magicAttackAll: {
            name: "Magic Attack All",
            desc1: "Deal [1]+[MP*20%] magic damage to all enemies",
            desc2: "Deal [1]+[MP*40%] magic damage to all enemies",
            desc3: "Deal [1]+[MP*60%] magic damage to all enemies",
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
            desc2: "Remove [2] debuffs from ally",
            desc3: "Remove [3] debuff from ally",
        },
    },
    level3: {
        attrArmorBigSelf: {
            name: "Armor more",
            desc1: "Armor self [5]+[PPx40%]",
            desc2: "Armor self [5]+[PPx70%]",
            desc3: "Armor self [5]+[PP]",
        },
        buffSelfMPorPP: {
            name: "Strong link",
            desc1: "Buff self MP or PP [6]\ndepending on which\nattribute is highest",
            desc2: "Buff self MP or PP [12]\ndepending on which\nattribute is highest",
            desc3: "Buff self MP or PP [20]\ndepending on which\nattribute is highest",
        },
        buffSummonCritSkill: {
            name: "Serious danger",
            //desc1: "Командное усиление призывов\nвесь бой шанс критических\nударов +[5+20%x(МС+ФС)]%\nи атаки вызывают кровотечение",
            desc1: "Team-wide buff of summons\nfor the rest of battle\ncrit chance +[5+20%x(MP+PP)]%\nand attacks cause bleed",
            desc2: "Team-wide buff of summons\nfor the rest of battle\ncrit chance +[7+30%x(MP+PP)]%\nand attacks cause bleed",
            desc3: "Team-wide buff of summons\nfor the rest of battle\ncrit chance +[10+40%x(MP+PP)]%\nand attacks cause bleed",
        },
        buffTotalDmgSkill: {
            name: "Total damage",
            desc1: "Buff total damage\n([10]+[40%xMP])% ally in front",
            desc2: "Buff total damage\n ([10]+[60%xMP])% ally in front",
            desc3: "Buff total damage\n ([10]+[80%xMP])% ally in front",
        },
        increaseMaxHpSkill: {
            name: "Nature grow",
            desc1: "Increase [5]+[20%xMP]+[20%xPP]\nself max hp and\nheal same amount",
            desc2: "Increase [5]+[30%xMP]+[30%xPP]\nself max hp and\nheal same amount",
            desc3: "Increase [5]+[40%xMP]+[40%xPP]\nself max hp and\nheal same amount",
        },
        incrTotemValueSkill: {
            name: "Empower totem",
            desc1: "Increase current totem\n values by [1]+[MPx20%]",
            desc2: "Increase current totem\n values by [1]+[MPx40%]",
            desc3: "Increase current totem\n values by [1]+[MPx60%]",
        },
        magicRain: {
            name: "Magic rain",
            desc1: "Deal [2] magic damage \nto random enemy [1+MP*40%] times",
            desc2: "Deal [2] magic damage \nto random enemy [2+MP*50%] times",
            desc3: "Deal [2] magic damage \nto random enemy [3+MP*60%] times",
        },
        outHealBuffSkill: {
            name: "Out heal",
            desc1: "Buff outgoing heal\n([10]+[40%xMP])% ally in front",
            desc2: "Buff outgoing heal\n([10]+[60%xMP])% ally in front",
            desc3: "Buff outgoing heal\n([10]+[80%xMP])% ally in front",
        },
        shieldAttackSkill: {
            name: "Shield bash",
            desc1: "Deal [20%xArmor] to first enemy",
            desc2: "Deal [30%xArmor] to first enemy",
            desc3: "Deal [50%xArmor] to first enemy",
        },
        stealPPorMPSkill: {
            name: "Steal power",
            desc1: "Steal [4] PP or MP\n from highest PP/MP enemy.\nDepending on which\nattribute is highest",
            desc2: "Steal [7] PP or MP\n from highest PP/MP enemy.\nDepending on which\nattribute is highest",
            desc3: "Steal [12] PP or MP\n from highest PP/MP enemy.\nDepending on which\nattribute is highest",
        },
    },
    level4: {},
    mc: {
        alchemistSkill: {
            name: "Salvation",
            desc1: "Swap hp with low hp ally\n and heal self [5]+[MPx20%]",
            desc2: "Swap hp with low hp ally\n and heal self [5]+[MPx30%]",
            desc3: "Swap hp with low hp ally\n and heal self [5]+[MPx40%]",
        },
        assassinSkill: {
            name: "Poison blade",
            desc1: "Apply poison [1] on basic attack.\nTarget lowest hp enemy\non next basic attack",
            desc2: "Apply poison [2] on basic attack.\nTarget lowest hp enemy\non next basic attack.",
            desc3: "Apply poison [3] on basic attack.\nTarget lowest hp enemy\non next basic attack.",
        },
        barbarianSkill: {
            name: "Barbarian Shout",
            desc1: "100% of hp regen increase\nbasic attack for 2 turns",
            desc2: "125% of hp regen increase\nbasic attack for 3 turns",
            desc3: "150% of hp regen increase\nbasic attack for 4 turns",
        },
        battleMageSkill: {
            name: "Multi attack",
            desc1: "Attack random enemy with\nphysical damage [4+35%xPP]\nAttack random enemy with\nmagical damage [4+35%xMP]",
            desc2: "Attack random enemy with\nphysical damage [6+50%xPP]\nAttack random enemy with\nmagical damage [6+50%xMP]",
            desc3: "Attack random enemy with\nphysical damage [9+65%xPP]\nAttack random enemy with\nmagical damage [9+65%xMP]",
        },
        beastMasterSkill: {
            name: "Beastmaster crow",
            desc1: "Summon crow (totem)\n that attacks random\nenemy [2]",
            desc2: "Summon crow (totem)\n that attacks random\nenemy [2] twice",
            desc3: "Summon crow (totem)\n that attacks random\nenemy [2] 3 times",
        },
        bishopSkill: {
            name: "Chain heal",
            desc1: "Heals low hp ally\n[2]+[20%xMP] 3 times",
            desc2: "Heals low hp ally\n[2]+[30%xMP] 3 times",
            desc3: "Heals low hp ally\n[2]+[40%xMP] 3 times",
        },
        blackKnightSkill: {
            name: "Black shield",
            desc1: "Deflect next enemy skill\n back to the owner",
            desc2: "Deflect next enemy skill\n back to the owner",
            desc3: "Deflect next enemy skill\n back to the owner",
        },
        bladedancerSkill: {
            name: "Dance of steel",
            desc1: "Сonsecutive basic attacks\ndeal more damage [1]",
            desc2: "Сonsecutive basic attacks\ndeal more damage [2]",
            desc3: "Сonsecutive basic attacks\ndeal more damage [3]",
        },
        commanderSkill: {
            name: "Commander horn",
            desc1: "Increase all summons\nbasic attack\ndamage [2]+[PPx50%]",
            desc2: "Increase all summons\nbasic attack\ndamage [2]+[PPx70%]",
            desc3: "Increase all summons\nbasic attack\ndamage [2]+[PP]",
        },
        DivineShield: {
            name: "Divine shield",
            desc1: "Shield self with faith,\nprotecting from attacks\nbelow [5+PPx20%] damage",
            desc2: "Shield self with faith,\nprotecting from attacks\nbelow [7+PPx40%] damage",
            desc3: "Shield self with faith,\nprotecting from attacks\nbelow [10+PPx60%] damage",
        },
        doomsayerSkill: {
            name: "Doom curse",
            desc1: "Disable next enemy\nhero skill,\nexcept MC skills",
            desc2: "Disable next skill of\n2 enemy heroes,\nexcept MC skills",
            desc3: "Disable next skill of\n3 enemy heroes,\nexcept MC skills",
        },
        druidSkill: {
            name: "Chain lightning",
            desc1: "Apply [1] shock to\nrandom enemy 3 times",
            desc2: "Apply [1] shock to\nrandom enemy 4 times",
            desc3: "Apply [1] shock to\nrandom enemy 5 times",
        },
        duelistSkill: {
            name: "Copy buff",
            desc1: "Copy random buff\nfrom ally to self",
            desc2: "Copy random buff\nfrom ally to self",
            desc3: "Copy random buff\nfrom ally to self",
        },
        exorcistSkill: {
            name: "Ritual of exorcism",
            desc1: "Remove a summon and remove a totem\n from enemies",
            desc2: "Remove a summon and remove a totem\n from enemies",
            desc3: "Remove a summon and remove a totem\n from enemies",
        },
        forestSpititSkill: {
            name: "Spirit Sacrifice",
            desc1: "Sacrifice self armor\nto gain[20%xARMOR] hp regen",
            desc2: "Sacrifice self armor\nto gain[30%xARMOR] hp regen",
            desc3: "Sacrifice self armor\nto gain[40%xARMOR] hp regen",
        },
        gladiatorSkill: {
            name: "Gladiator totem",
            desc1: "Place a totem that \nincreases physical power [2]",
            desc2: "Place a totem that \nincreases physical power [3]",
            desc3: "Place a totem that \nincreases physical power [4]",
        },
        heraldSkill: {
            name: "Herald horn",
            desc1: "Armor all allies [4]+[PP]",
            desc2: "Armor all allies [4]+[2xPP]",
            desc3: "Armor all allies [4]+[3xPP]",
        },
        hunterSkill: {
            name: "Hunter mark",
            desc1: "Mark second enemy and\ndecrease physical resistance -[10]%\nTarget marked enemy\nwith basic attacks",
            desc2: "Mark second enemy and\ndecrease physical resistance -[20]%\nTarget marked enemy\nwith basic attacky",
            desc3: "Mark second enemy and\ndecrease physical resistance -[30]%\nTarget marked enemy\nwith basic attacky",
        },
        illusionistSkill: {
            name: "Illusion",
            desc1: "Summon illusion that\nuse magic skills and\ninherits 25% MP",
            desc2: "Summon illusion that\nuse magic skills and\ninherits 35% MP",
            desc3: "Summon illusion that\nuse magic skills and\ninherits 50% MP",
        },
        inquisitorSkill: {
            name: "Brand of obedience",
            desc1: "Debuff highest MP enemy \nwith mark that applies\n [5] burn every turn.",
            desc2: "Debuff highest MP enemy \nwith mark that applies\n [10] burn every turn.",
            desc3: "Debuff highest MP enemy \nwith mark that applies\n [15] burn every turn.",
        },
        jesterSkill: {
            name: "Fire fists",
            desc1: "Apply [1]+[50%xMP] burn\non basic attacks",
            desc2: "Apply [1]+[70%xMP] burn\non basic attacks",
            desc3: "Apply [1]+[MP] burn\non basic attacks",
        },
        knightSkill: {
            name: "Knight armor",
            desc1: "Armor self [12+35%xPP]",
            desc2: "Armor self [15+50%xPP]",
            desc3: "Armor self [20+65%xPP]",
        },
        mimicSkill: {
            name: "Mimicry",
            desc1: "<NOT IMPLEMENTED>",
            desc2: "<NOT IMPLEMENTED>",
            desc3: "<NOT IMPLEMENTED>",
        },
        minstrelSkill: {
            name: "Double buff",
            desc1: "Doubles value of\na random buff on ally",
            desc2: "Tripls value of\na random buff on ally",
            desc3: "Tripls value of\na random buff on ally",
        },
        monkSkill: {
            name: "Serenity",
            desc1: "Remove negative status\nfrom self.\nRemove debuff from self",
            desc2: "Remove negative status\nfrom self twice.\nRemove debuff from self twice",
            desc3: "Remove negative status\nfrom self twice.\nRemove debuff from self twice",
        },
        necromancerSkill: {
            name: "Undead call",
            desc1: "Summon a skeleton [stats1]\nif in front row, or\nskeletal mage [stats2]",
            desc2: "Summon a skeleton [stats1]\nif in front row, or\nskeletal mage [stats2]",
            desc3: "Summon a skeleton [stats1]\nif in front row, or\nskeletal mage [stats2]",
        },
        oracleSkill: {
            name: "Destiny whisper",
            desc1: "Evade next basic attack.\nRemove next debuff.",
            desc2: "Evade next 2 basic attacks.\nRemove next debuff.",
            desc3: "Evade next 2 basic attacks.\nRemove 2 next debuffs.",
        },
        predatorSkill: {
            name: "Victim trace",
            desc1: "Mark low hp enemy\nand decrease physical resistance -[20]%.\nTarget marked enemy with basic attacks.",
            desc2: "Mark low hp enemy\nand decrease physical resistance -[40]%.\nTarget marked enemy with basic attacks.",
            desc3: "Mark low hp enemy\nand decrease physical resistance -[60]%.\nTarget marked enemy with basic attacks.",
        },
        runecasterSkill: {
            name: "Fire shield",
            desc1: "Shield self with magic\nfire which burns every\nattacker [1]+[50%xMP]",
            desc2: "Shield self with magic\nfire which burns every\nattacker [1]+[70%xMP]",
            desc3: "Shield self with magic\nfire which burns every\nattacker [1]+[MP]",
        },
        samuraiSkill: {
            name: "Sharp blade",
            desc1: "Applies [2] bleed\n on basic attacks",
            desc2: "Applies [3] bleed\n on basic attacks",
            desc3: "Applies [4] bleed\n on basic attacks",
        },
        shadowMasterSkill: {
            name: "Unholy pact",
            desc1: "Apply bufff that allows\nto use heal skills as\ndamage skills",
            desc2: "Apply bufff that allows\nto use heal skills as\ndamage skills",
            desc3: "Apply bufff that allows\nto use heal skills as\ndamage skills",
        },
        shamanTotemEmpower: {
            name: "Empower all totems",
            desc1: "Increase all totems value by [1]+[MP*50%]",
            desc2: "Increase all totems value by [1]+[MP*70%]",
            desc3: "Increase all totems value by [1]+[MP]",
        },
        sorcererSkill: {
            name: "Sorcerer attack",
            desc1: "Deal [5]+[MP*30%] magic damage\n to first two enemies.",
            desc2: "Deal [5]+[MP*30%] magic damage\n to first three enemies.",
            desc3: "Deal [5]+[MP*30%] magic damage\n to all enemies.",
        },
        warlockSkill: {
            name: "Warlock curse",
            desc1: "Debuff highest attack enemy\n -[20]% basic attack damage.\n Apply [1]+[MPx50%] poison.",
            desc2: "Debuff highest attack enemy\n -[20]% basic attack damage.\n Apply [1]+[MP] poison.",
            desc3: "Increase all totems value by [1]+[MP]",
        },
        witchSkill: {
            name: "Curse circle",
            desc1: "Apply [1]+[MPx50%] bleed\n to all enemies",
            desc2: "Apply [1]+[MPx70%] bleed\n to all enemies",
            desc3: "Apply [1]+[MP] bleed\n to all enemies",
        },
        zealotSkill: {
            name: "Antiheal",
            desc1: "Curse first enemy with\nantiheal which transforms next incoming\nheal into damage",
            desc2: "Curse first enemy with\nantiheal which transforms next incoming\nheal into damage",
            desc3: "Curse first enemy with\nantiheal which transforms next incoming\nheal into damage",
        },
    },
    mobs: {
        goblinShamanHpRegIncr: {
            name: "Increase regen all",
            desc1: "Increase regeneration [2] for all allies",
            desc2: "Increase regeneration [4] for all allies",
            desc3: "Increase regeneration [8] for all allies",
        },
        goblinPocketSand: {
            name: "Pocket sand",
            desc1: "Blind first enemy for\n[40+PP] (1 turn) and\nincrease own next basic\nattack by [2+50%xPP]",
            desc2: "Blind first enemy for\n[50+1.4xPP] (1 turn) and\nincrease own next basic\nattack by [2+75%xPP]",
            desc3: "Blind first enemy for\n[60+1.8xPP] (1 turn) and\nincrease own next basic\nattack by [2+PP]",
        },
        goblinApplyShock: {
            name: "Goblin shock",
            desc1: "Apply [1] shock to the\nenemy with most shock or\na random enemy",
            desc2: "Apply [2] shock to the\nenemy with most shock or\na random enemy",
            desc3: "Apply [3] shock to the\nenemy with most shock or\na random enemy",
        },
        skeletonUnholyLeap: {
            name: "Unholy leap",
            desc1: `Attacks enemy with lowest\nhealth percent physically\nfor [3+35%xPP] and apply\n[1+20%xPP] poison`,
            desc2: `Attacks enemy with lowest\nhealth percent physically\nfor [4+65%xPP] and apply\n[2+40%xPP] poison`,
            desc3: `Attacks enemy with lowest\nhealth percent physically\nfor [5+PP] and apply\n[3+60%xPP] poison`,
        },
        skeletonArmorSelfAndLow: {
            name: "Decayed shell",
            desc1: `Armor Self and low Hp ally\nfor [4+20%xPP]`,
            desc2: `Armor Self and low Hp ally\nfor [6+50%xPP]`,
            desc3: `Armor Self and low Hp ally\nfor [8+PP]`,
        },
        poisonedFlames: {
            name: "Poisoned flames",
            desc1: `Attack random enemy with\nmagic [6+35%xMP] and apply\n[2] poison and burn`,
            desc2: `Attack random enemy with\nmagic [8+65%xMP] and apply\n[3] poison and burn`,
            desc3: `Attack random enemy with\nmagic [10+MP] and apply\n[4] poison and burn`,
        },
        goldGoblinBuff: {
            name: "High morale",
            desc1: `Increase next basic attack\nof all allies and armor\nby [1]`,
            desc2: `Increase next basic attack\nof all allies and armor\nby [2]`,
            desc3: `Increase next basic attack\nof all allies and armor\nby [3]`,
        },
        lastStandSkill: {
            name: "Last stand",
            desc1: `If frontrow allies are\ndead, increase Hp by [5+50%xPP]\nIf there's one or less\nalive frontrow allies\nget +[1] attack and regen`,
            desc2: `If frontrow allies are\ndead, increase Hp by [7+60%xPP]\nIf there's one or less\nalive frontrow allies\nget +[2] attack and regen`,
            desc3: `If frontrow allies are\ndead, increase Hp by [10+75%xPP]\nIf there's one or less\nalive frontrow allies\nget +[3] attack and regen`,
        },
    },
};
