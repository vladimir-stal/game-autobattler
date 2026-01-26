import { EHeroClass, ERoomType } from "../types";
import { Ii18n } from "./en";

export const i18n: Ii18n = {
    attributes: {
        attribute: {
            basicArmor: "броня",
            basicAttack: "базовая атака",
            basicCritChance: "шанс крита",
            basicEvasionChance: "шанс уклонения",
            basicHpRegen: "регенерация",
            basicMagicPower: "магическая сила",
            basicMaxHp: "здоровье",
            basicPhysicalPower: "физичекая сила",
        },
        afterDuelBonusesText: "После каждой дуэли:",
        afterDuelBonus: {
            EXP: "Опыт",
            GOLD: "Золото",
            STAT_ARMOR: "Броня",
            STAT_CRIT_CHANCE: "Шанс крита",
            STAT_EVAS_CHANCE: "Шанс уклонения",
            STAT_MAX_HP: "Здоровье",
            STAT_MP: "Магическая сила",
            STAT_PP: "Физичекая сила",
            STAT_HP_REGEN: "Регенерация",
        },
        bonusType: {
            APPLY_POISON_ON_HIT: "Накладывает яд при базовой атаке",
            BASIC_ATTACK_TWICE: "Атакует дважды",
            BASIC_ONCE_IN_TWO_TURNS: "атакует одинр раз в 2 хода",
            CRIT_EVERY_TWO_TURNS: "Критический удар каждые 2 хода",
            CRIT_INCR_NONCRIT_DECR: "Увеличивает критический удар",
            HEAL_INCREASE: "Увеливает лечение",
            INCREASE_DAMAGE_TO_ARMOR: "Увеливает урон по броне",
            INCREASE_DAMAGE_TO_BLEEDING: "Увеливает урон по целям с кровотоком",
            INCREASE_DAMAGE_TO_HP: "Увеливает урон по здоровью",
            INCREASE_DAMAGE_TO_POISONED: "Увеливает урон по отравленным целям",
            INCREASE_DAMAGE_TO_SUMMON: "Увеливает урон по призывам",
            INCREASE_MAGIC_DAMAGE: "Увеливает магический урон",
            INCREASE_PHYSICAL_DAMAGE: "Увеливает физический урон",
            INCREASE_SUMMON_ATTACK: "Увеливает атаку призыва",
            INCREASE_SUMMON_HP: "Увеливает здоровье призыва",
            STATUS_BLEED_APPLY_INCREASE: "Увеливает накладываемый кровоток",
            STATUS_BURN_APPLY_INCREASE: "Увеливает накладываемый ожог",
            STATUS_POISON_APPLY_INCREASE: "Увеливает накладываемый яд",
            SUMMON_INCREASE_DAMAGE: "Увеливает урон призыва",
            TOTEM_INCREASE_VALUE: "Увеливает урон тотема",
        },
        itemBonusType: { ATTRIBUTE: "АТРИБУТ" },
    },
    heroes: {
        basic: {
            DARK: "Темный",
            BARD: "Бард",
            MAGIC: "Маг",
            MASTER: "Мастер",
            ORDER: "Рыцарь",
            PRIEST: "Жрец",
            SUMMON: "Мистик",
            WARRIOR: "Воин",
            WILD: "Дикарь",
        },
        mc: {
            [EHeroClass.ALCHEMIST]: "Алхимик",
            [EHeroClass.ASSASSIN]: "Ассасин",
            [EHeroClass.BARBARIAN]: "Варвар",
            [EHeroClass.BATTLE_MAGE]: "Боевой маг",
            [EHeroClass.BEAST_MASTER]: "Мастер зверей",
            [EHeroClass.BISHOP]: "Епископ",
            [EHeroClass.BLACK_KNIGHT]: "Жнец",
            [EHeroClass.BLADEDANCER]: "Танцовщик с клинками",
            [EHeroClass.COMMANDER]: "Командир",
            [EHeroClass.DOOMSAYER]: "Предсказатель",
            [EHeroClass.DRUID]: "Друид",
            [EHeroClass.DUELIST]: "Дуэлянт",
            [EHeroClass.EXORCIST]: "Экзорцист",
            [EHeroClass.FOREST_SPIRIT]: "Дух леса",
            [EHeroClass.GLADIATOR]: "Гладиатор",
            [EHeroClass.HERALD]: "Вестник",
            [EHeroClass.HUNTER]: "Охотник",
            [EHeroClass.ILLUSIONIST]: "Иллюзионист",
            [EHeroClass.INQUISITOR]: "Инквизитор",
            [EHeroClass.KNIGHT]: "Королевский рыцарь",
            [EHeroClass.MAGIC_BARD]: "Магический бард",
            [EHeroClass.MIMIC]: "Мимик",
            [EHeroClass.MINSTREL]: "Министерль",
            [EHeroClass.MONK]: "Монах",
            [EHeroClass.NECROMANCER]: "Нектомант",
            [EHeroClass.ORACLE]: "Оракул",
            [EHeroClass.PALADIN]: "Паладин",
            [EHeroClass.PREDATOR]: "Хищник",
            [EHeroClass.RUNECASTER]: "Заклинатель рун",
            [EHeroClass.SAMURAI]: "Самурай",
            [EHeroClass.SHADOW_MASTER]: "Мастер теней",
            [EHeroClass.SHAMAN]: "Шаман",
            [EHeroClass.SORCERER]: "Чародей",
            [EHeroClass.WARLOCK]: "Колдун",
            [EHeroClass.WITCH]: "Ведьма",
            [EHeroClass.ZEALOT]: "Фанатик",
        },
    },
    units: {
        WEAKGOBLIN: "Слабый гоблин",
        GOBLIN: "Гоблин",
        GOBLINSHAMAN: "Гоблин шаман",
        SKELETON: "Скелет",
        SKELETONWARRIOR: "Скелет воин",
        SKELETONMAGE: "Скелет маг",
        SOLDIER: "Солдат",
        GOLDGOBLIN1: "Гоблин торговец",
        PEASANT: "Крестьянин",
    },
    items: {
        //basic
        axe1: "Ржавый топор",
        dagger1: "Ржавый кинжал",
        mace1: "Ржавая булава",
        musical1: "Старая лютня",
        scepter1: "Ржавый скипетр",
        shield1: "Ржавый щит",
        staff1: "Старый посох",
        sword1: "Ржавый меч",
        totem1: "Слабый тотем",
        wand1: "Слабый жезл",
        //
        basic_ring_damage: "Кольцо воина",
        basic_ring_regen: "Кольцо регенерации",
        basic_gold_bag: "Мешок с золотом",
        basic_exp_ring: "Кольцо опыта",
        basic_heal: "Кольцо жреца",
        basic_hat: "Старый шлем",
        basic_jacket: "Старая куртка",
        basic_pants: "Старый штаны",
        basic_boots: "Старый ботинки",
        //
    },
    rooms: {
        //
        // SELL ROOMS
        //
        [ERoomType.HEROES_SELL]: "ТАВЕРНА",
        //
        [ERoomType.ITEM_CLASS_SELL]: "СПЕЦ РЫНОК",
        [ERoomType.ITEM_WEAPON_CLASS_SELL]: "ОРУЖЕЙНЫЙ",
        [ERoomType.ITEM_WEAPON_SELL]: "АРСЕНАЛ",
        [ERoomType.ITEM_COMMON_SELL]: "КУЗНИЦА",
        //
        [ERoomType.SKILLS_CLASS_SELL]: "БАШНЯ МАГА",
        [ERoomType.SKILLS_SELL]: "МАГИЧЕСКИЙ",
        [ERoomType.UNIT_SELL]: "НАЁМНИКИ",
        //
        // CHOISE ROOMS
        //
        [ERoomType.ATTRIBUTE_SELECT]: "УПРАЖНЕНИЯ",
        [ERoomType.EXP_ALL]: "ОПЫТ ВСЕМ",
        [ERoomType.EXP_SELECT]: "ЛАГЕРЬ",
        //
        [ERoomType.ITEM_SELECT]: "ЧЕРНЫЙ РЫНОК",
        [ERoomType.MIXED_CLASS_SELECT]: "СПЕЦИАЛИСТ",
        [ERoomType.UPGRADE_SKILL_OR_ITEM]: "УЛУЧШИТЬ",
        //
        // RANDOM ROOMS
        //
        [ERoomType.ATTRIBUTE_RANDOM]: "УПРАЖНЕНИЕ",
        [ERoomType.EXP_SINGLE]: "ТРЕНИРОВКА",
        [ERoomType.GOLD]: "ПОПРОШАЙКА",
        [ERoomType.INCOME]: "ДОХОД",
        [ERoomType.ITEM_CLASS_RANDOM]: "УКРАСТЬ ПРЕДМЕТ",
        [ERoomType.ITEM_RANDOM]: "ПРЕДМЕТ",
        [ERoomType.ITEM_COMMON_RANDOM]: "УКРАСТЬ ПРЕДМЕТ",
        [ERoomType.ITEM_WEAPON_BASIC_RANDOM]: "НАСЛЕДИЕ",
        [ERoomType.ITEM_WEAPON_CLASS_RANDOM]: "УКРАСТЬ ОРУЖИЕ",
        [ERoomType.SKILL_CLASS_RANDOM]: "МАГИЧЕСКАЯ ШКОЛА",
        [ERoomType.SKILL_RANDOM]: "ВЫУЧИТЬ ТРЮК",
        [ERoomType.UNIT_RANDOM]: "ПОСЛЕДОВАТЕЛЬ",
        //
        // SPECIAL ROOMS
        //
        [ERoomType.DUEL]: "ДУЭЛЬ",
        [ERoomType.MOBS]: "ПОДЗЕМЕЛЬЕ",
        [ERoomType.BOSS]: "БОСС ПОДЗЕМЕЛЬЯ",
        [ERoomType.TRIPLE_SET]: "НАГРАДА",
        [ERoomType.SKILLS_SELL_ENHANCED]: "УЛУЧШЕННЫЕ НАВЫКИ",
        //
    },
    skills: {
        basic: {
            //
            // BARD
            //
            buffBaNextBaAll: {
                name: "Усиление",
                desc1: "Усиливает следующую \nбазовую атаку \nу всех союзников на [2]",
                desc2: "Усиливает следующую \nбазовую атак \nу всех союзников на [3]",
                desc3: "Усиливает следующую \nбазовую атаку \nу всех союзников на [4]",
            },
            buffBaSelf: {
                name: "Усиление себя",
                desc1: "Усиливает свою \nбазовую атаку на [1]",
                desc2: "Усиливает свою \nбазовую атаку на [2]",
                desc3: "Усиливает свою \nбазовую атаку на [3]",
            },
            buffPpAll: {
                name: "Сила музыки",
                desc1: "Усиливает физическую мощь(PP) \nна [1]+[MP*50%] у всех союзников",
                desc2: "Усиливает физическую мощь(PP) \nна [1]+[MP*50%] у всех союзников",
                desc3: "Усиливает физическую мощь(PP) \nна [1]+[MP*50%] у всех союзников",
            },
            //
            // DARK
            //
            poisonRandom: {
                name: "Ядовитый укус",
                desc1: "Отравляет улчайного врага на [3]",
                desc2: "Отравляет улчайного врага на [4]",
                desc3: "Отравляет улчайного врага на [5]",
            },
            magicAttackX3: {
                name: "Магические стрелы",
                desc1: "Наносит [2] магического урона \nслучайному врагу 3 раза",
                desc2: "Наносит [3] магического урона \nслучайному врагу 3 раза",
                desc3: "Наносит [4] магического урона \nслучайному врагу 3 раза",
            },
            //
            // MASTER
            //
            buffNextBaX: {
                name: "Пронзающий удар",
                desc1: "Усиливает следующую \nбазовую атаку x[1.4]",
                desc2: "Усиливает следующую \nбазовую атаку x[1.6]",
                desc3: "Усиливает следующую \nбазовую атаку x[1.8]",
            },
            //
            // MAGIC
            //
            magicAttack: {
                name: "Магическая атака",
                desc1: "Наносит [5] магического \nурона первому врагу",
                desc2: "Наносит [7] магического \nурона первому врагу",
                desc3: "Наносит [9] магического \nурона первому врагу",
            },
            applyBurn: {
                name: "Пламя",
                desc1: "Поджигает на [3] \nпервого врага",
                desc2: "Поджигает на [4] \nпервого врага",
                desc3: "Поджигает на [6] \nпервого врага",
            },
            //
            // MASTER + WARRIOR
            //
            phycAttack: {
                name: "Удар",
                desc1: "Наносит [4] физического \nурона первому врагу",
                desc2: "Наносит [6] физического \nурона первому врагу",
                desc3: "Наносит [8] физического \nурона первому врагу",
            },
            //
            // ORDER
            //
            attrIncArmorSelf: {
                name: "Укрепление",
                desc1: "Увеличить броню на [3]",
                desc2: "Увеличить броню на [5]",
                desc3: "Увеличить броню на [8]",
            },
            attrAttackSelf: {
                name: "Заточка",
                desc1: "Увеличивает базовую атаку на [1]",
                desc2: "Увеличивает базовую атаку на [2]",
                desc3: "Увеличивает базовую атаку на [3]",
            },
            //
            // PRIEST
            //
            healFirst: {
                name: "Исцеление",
                desc1: "Лечит первого союзника на [3]",
                desc2: "Лечит первого союзника на [5]",
                desc3: "Лечит первого союзника на [7]",
            },
            healSelf: {
                name: "Самоисцеление",
                desc1: "Лечит себя на [4]",
                desc2: "Лечит себя на [6]",
                desc3: "Лечит себя на [8]",
            },
            //
            // SUMMON
            //
            fireflySummon: {
                name: "Светлячок",
                desc1: "Призвать магическое существо [3,1]",
                desc2: "Призвать магическое существо [4,1]",
                desc3: "Призвать магическое существо [7,1]",
            },
            sparkSummon: {
                name: "Дух воина",
                desc1: "Призвать магическое существо [2,3]",
                desc2: "Призвать магическое существо [3,4]",
                desc3: "Призвать магическое существо [6,6]",
            },
            //
            // WARRIOR
            //
            buffNextBa: {
                name: "Боевой крик",
                desc1: "Усиливает следующую  \nбазовую атаку на [4]",
                desc2: "Усиливает следующую  \nбазовую атаку на [6]",
                desc3: "Усиливает следующую  \nбазовую атаку на [8]",
            },
            //
            // WILD
            //
            attrIncrHpReg: {
                name: "Регенерация",
                desc1: "Увеличивает регенерацию \nздоровья на [1]",
                desc2: "Увеличивает регенерацию \nздоровья на [2]",
                desc3: "Увеличивает регенерацию \nздоровья на [3]",
            },
            totemAttack: {
                name: "Дикий тотем",
                desc1: "Вызывает тотем, который наносит \n[1] урона случайному врагу",
                desc2: "Вызывает тотем, который наносит \n[2] урона случайному врагу",
                desc3: "Вызывает тотем, который наносит \n[3] урона случайному врагу",
            },
        },
        mc: {
            BarbarianShout: {
                name: "Боевой крик",
                desc1: "Добавляет значение регенерации\n к следующей базовой атаке",
                desc2: "Добавляет значение регенерации\n к следующей базовой атаке",
                desc3: "Добавляет значение регенерации\n к следующей базовой атаке",
            },
            DivineShield: {
                name: "Божественный щит",
                desc1: "Защищает себя магическим щитом\n, который поглощает урон от первой атаки",
                desc2: "Защищает себя магическим щитом\n, который поглощает урон от первой атаки",
                desc3: "Защищает себя магическим щитом\n, который поглощает урон от первой атаки",
            },
        },
        mobs: {
            goblinShamanHpRegIncr: {
                name: "Регенерация гоблинов",
                desc1: "Увеличивает регенерацию \nздоровья на [2] у всех союзников",
                desc2: "Увеличивает регенерацию \nздоровья на [4] у всех союзников",
                desc3: "Увеличивает регенерацию \nздоровья на [8] у всех союзников",
            },
        },
    },
    tags: {
        BARD: "БАРД",
        DARK: "ТЕМНЫЙ",
        MAGIC: "МАГИЯ",
        MASTER: "МАСТЕР",
        ORDER: "ЗАКОН",
        PRIEST: "СВЯТОЙ",
        SUMMON: "МИСТИК",
        WARRIOR: "ВОИН",
        WILD: "ДИКИЙ",
    },
    ui: {
        BUY: "КУПИТЬ",
        TAKE: "ВЗЯТЬ",
        REROLL: "ОБНОВИТЬ",
        SELL: "ПРОДАТЬ",
        MOVE: "ДВИГАТЬ",
        SELECT: "ВЫБРАТЬ",
        SKIP: "ПРОПУСТИТЬ",
        GOLD: "ЗОЛОТО",
        INCOME: "ДОХОД",
        DAY: "ДЕНЬ",
        HOUR: "ЧАС",
        HP: "ЗДОРОВЬЕ",
        NEXT_ROOM: "СЛЕДУЮЩАЯ КОМНАТА",
        UPGRADE: "УЛУЧШИТЬ",
        RESTART_GAME: "РЕСТАРТ",
        //
        SKILL: "НАВЫК",
        ITEM: "ПРЕДМЕТ",
        //
        DEAD: "МЁРТВ",
        VICTORY: "ПОБЕДА",
        DEFEAT: "ПОРАЖЕНИЕ",
    },
};
