import { EHeroClass, EItemAfterDuelBonusCondition, ERoomType, ESelectCardHint, ESelectRoomHint } from "../types";
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
            STAT_MP: "Маг. сила",
            STAT_PP: "Физ. сила",
            STAT_HP_REGEN: "Регенерация",
            STAT_BASIC_ATTACK: "Базовая атака",
        },
        bonusType: {
            ADDITIONAL_BUFF_TARGET: "Бафф также накладывается\n на случайного союзника,\nкроме начальной цели.",
            APPLY_STATUS_ON_BASIC_ATTACK: "Накладывает статус при базовой атаке",
            //APPLY_POISON_ON_HIT: "Накладывает яд при базовой атаке",
            BASIC_ATTACK_TWICE: "Атакует дважды",
            BASIC_ONCE_IN_TWO_TURNS: "атакует одинр раз в 2 хода",
            CRIT_EVERY_TWO_TURNS: "Критический удар каждые 2 хода",
            CRIT_INCR_NONCRIT_DECR: "Увеличивает критический удар",
            CRIT_WITH_MAGIC: "Магические атаки могут быть критическими",
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
            INCREASE_TOTAL_DAMAGE_FROM_HP: "Увеливает весь урон на % от текущего здоровья",
            STATUS_BLEED_APPLY_INCREASE: "Увеливает накладываемый кровоток",
            STATUS_BURN_APPLY_INCREASE: "Увеливает накладываемый ожог",
            STATUS_POISON_APPLY_INCREASE: "Увеливает накладываемый яд",
            SUMMON_INCREASE_DAMAGE: "Увеливает урон призыва",
            TOTEM_INCREASE_VALUE: "Увеливает урон тотема",
        },
        itemBonusType: { ATTRIBUTE: "АТРИБУТ", ITEM_WEAPON_SLOT: "Дополнительный слот для оружия" },
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
            [EHeroClass.MAGIC_BARD]: "Шут",
            [EHeroClass.MIMIC]: "Мимик",
            [EHeroClass.MINSTREL]: "Министерль",
            [EHeroClass.MONK]: "Монах",
            [EHeroClass.NECROMANCER]: "Некромант",
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
            [EHeroClass.MOB]: "Моб",
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
        WARRIORSUMMON: "Дух воина",
        FIREFLY: "Светлячок",
        WOLF: "Волк",
        STRONGWOLF: "Сильный волк",
    },
    items: {
        // WEAPON
        // basic
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
        // COMMON
        // basic
        basic_ring_damage: "Кольцо воина",
        basic_ring_regen: "Кольцо регенерации",
        basic_gold_bag: "Мешок с золотом",
        basic_exp_ring: "Кольцо опыта",
        basic_heal: "Кольцо жреца",
        basic_hat: "Старый шлем",
        basic_jacket: "Старая куртка",
        basic_pants: "Старые штаны",
        basic_boots: "Старые ботинки",
        // level 2
        // level 3
        evasion_amulet: "Амулет крита",
        crit_amulet: "Амулет уклонения",
    },
    totems: {
        basicWildTotem: "Дикий тотем",
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
        [ERoomType.ITEM_LEGEND_SELL]: "ЛЕГЕНДАРКИ",
        //
        [ERoomType.SKILLS_CLASS_SELL]: "БАШНЯ МАГА",
        [ERoomType.SKILLS_SELL]: "ШАТЁР МАГА",
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
        //
        // RANDOM ROOMS
        //
        [ERoomType.ATTRIBUTE_RANDOM]: "ТРЕНИРОВКА",
        [ERoomType.EXP_SINGLE]: "МЕДИТАЦИЯ",
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
        [ERoomType.TRIPLE_SET]: "ОХОТА",
        [ERoomType.SKILLS_SELL_ENHANCED]: "УЛУЧШЕННЫЕ НАВЫКИ",
        [ERoomType.UPGRADE_SKILL_OR_ITEM]: "ВОЗВЫШЕНИЕ",
        [ERoomType.ENCHANCE_SKILL_CHAINED]: "РИТУАЛ",
        //
    },
    roomDescriptions: {
        // ATTR
        [ERoomType.ATTRIBUTE_RANDOM]: "СЛУЧАЙНЫЙ АТРИБУТ",
        [ERoomType.ATTRIBUTE_SELECT]: "УВЕЛИЧИТЬ АТРИБУТ",
        // EXP
        [ERoomType.EXP_SELECT]: "НАБРАТЬСЯ ОПЫТА",
        [ERoomType.EXP_SINGLE]: "ПОЛУЧИТЬ ОПЫТ",
        // GOLD
        [ERoomType.GOLD]: "ПОЛУЧИТЬ ЗОЛОТО",
        [ERoomType.INCOME]: "УВЕЛИЧИТЬ ДОХОД",
        // ITEMS
        [ERoomType.ITEM_SELECT]: "КУПИТЬ ВСЯКОЕ",
        [ERoomType.ITEM_RANDOM]: "СЛУЧАЙНЫЙ ПРЕДМЕТ",
        [ERoomType.ITEM_COMMON_SELL]: "КУПИТЬ ЭКИПИРОВКУ",
        [ERoomType.ITEM_WEAPON_BASIC_RANDOM]: "БАЗОВОЕ ОРУЖИЕ",
        [ERoomType.ITEM_COMMON_RANDOM]: "СЛУЧАЙНЫЙ ПРОСТОЙ ПРЕДМЕТ",
        [ERoomType.ITEM_CLASS_RANDOM]: "СЛУЧАЙНЫЙ ПРЕДМЕТ КЛАССА",
        [ERoomType.ITEM_CLASS_SELL]: "КУПИТЬ ПРЕДМЕТ КЛАССА",
        [ERoomType.ITEM_WEAPON_CLASS_SELL]: "КУПИТЬ ОРУЖИЕ КЛАССА",
        [ERoomType.HEROES_SELL]: "НАНЯТЬ ГЕРОЯ",
        // SKILLS
        [ERoomType.SKILLS_SELL]: "КУПИТЬ НАВЫКИ",
        [ERoomType.SKILLS_CLASS_SELL]: "КУПИТЬ НАВЫКИ КЛАССА",
        [ERoomType.SKILL_RANDOM]: "СЛУЧАЙНЫЙ НАВЫК",
        [ERoomType.SKILLS_SELL_ENHANCED]: "ВЫБРАТЬ ЦЕПНОЙ НАВЫК",
        // UNIT
        [ERoomType.UNIT_SELL]: "ЗАВЕРБОВАТЬ ПОМОЩНИКА",
        [ERoomType.UNIT_RANDOM]: "СЛУЧАЙНЫЙ ПОМОЩНИК",
        // MIXED
        [ERoomType.MIXED_CLASS_SELECT]: "КУПИТЬ ВСЕ ДЛЯ КЛАССА",
        // UNIQUE
        [ERoomType.TRIPLE_SET]: "ЗАБРАТЬ ДОБЫЧУ",
        [ERoomType.DUEL]: "БРОСИТЬ ВЫЗОВ",
        [ERoomType.MOBS]: "СРАЗИТЬСЯ С МОНСТРАМИ",
        [ERoomType.BOSS]: "СРАЗИТЬСЯ С БОССОМ",
        [ERoomType.UPGRADE_SKILL_OR_ITEM]: "УЛУЧШИТЬ ПРЕДМЕТ ИЛИ НАВЫК",
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
                desc3: "Отравляет улчайного врага на [6]",
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
                desc3: "Наносит [6]+[PPx50%] физического \nурона первому врагу",
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
                desc1: "Призвать дух воина [2,3]",
                desc2: "Призвать дух воина [3,4]",
                desc3: "Призвать дух воина [6,6]",
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
        level2: {
            applyShock: {
                name: "Шок",
                desc1: "Накладывает [1] шок \nна первого врага",
                desc2: "Накладывает [2] шок \nна первого врага",
                desc3: "Накладывает [3] шок \nна первого врага",
            },
        },
        common: {
            removeBuff: {
                name: "Очищение усиления",
                desc1: "Очистить [1] усиление у врага",
                desc2: "Очистить [2] усиления у врагов",
                desc3: "Очистить [3] усиления у врагов",
            },
            removeDebuff: {
                name: "Очищение проклятия",
                desc1: "Очистить [1] проклятие у союзника",
                desc2: "Очистить [2] проклятия у союзников",
                desc3: "Очистить [3] проклятия у союзников",
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
                desc1: "Защищает себя магическим щитом,\nкоторый поглощает урон от первой атаки",
                desc2: "Защищает себя магическим щитом,\nкоторый поглощает урон от первой атаки",
                desc3: "Защищает себя магическим щитом,\nкоторый поглощает урон от первой атаки",
            },
            shamanTotemEmpower: {
                name: "Обряд поклонения",
                desc1: "Увеличивает силу всех тотемов на [1]+[MP*50%]",
                desc2: "Увеличивает силу всех тотемов на [1]+[MP*70%]",
                desc3: "Увеличивает силу всех тотемов на [1]+[MP]",
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
        MOB: "МОБ",
        //
        ALL: "ВСЕ",
    },
    ui: {
        BUY: "КУПИТЬ",
        TAKE: "ВЗЯТЬ",
        REROLL: "ОБНОВИТЬ",
        SELL: "ПРОДАТЬ",
        START: "НАЧАТЬ",
        MOVE: "ДВИГАТЬ",
        SELECT: "ВЫБРАТЬ",
        SKIP: "ПРОПУСТИТЬ",
        INCOME: "ДОХОД",
        DAY: "ДЕНЬ",
        HOUR: "ЧАС",
        HP: "ЗДОРОВЬЕ",
        NEXT_ROOM: "СЛЕДУЮЩАЯ КОМНАТА",
        UPGRADE: "УЛУЧШИТЬ",
        RESTART_GAME: "РЕСТАРТ",
        PREPARE: "ПОДГОТОВКА",
        NEXT: "ДАЛЬШЕ",
        SELECT_UPGRADE: "ВЫБЕРИТЕ УЛУЧШЕНИЕ",
        //
        ATTRIBUTE: "АТРИБУТ",
        SKILL: "НАВЫК",
        ITEM: "ПРЕДМЕТ",
        EXP: "ОПЫТ",
        EXP_PARTY: "ОПЫТ ВСЕМ",
        GOLD: "ЗОЛОТО",
        CHAINED_SKILL: "ЦЕПНОЙ НАВЫК",
        ON_START_SKILL: "НАЧАЛО ДУЭЛИ",
        //
        DEAD: "МЁРТВ",
        VICTORY: "ПОБЕДА",
        DEFEAT: "ПОРАЖЕНИЕ",
        //
        // HINTS
        [ESelectCardHint.TAKE_ALL_REWARDS]: "Заберите все награды",
        [ESelectCardHint.SELECT_SINGLE_HERO]: "Выберите одного героя",
        [ESelectCardHint.TAKE_REWARD]: "Заберите награду",
        [ESelectCardHint.TAKE_ITEM]: "Заберите предмет",
        [ESelectCardHint.TAKE_SKILL]: "Заберите навык",
        [ESelectCardHint.SELECT_SINGLE]: "Выберите один вариант",
        SELECT_SINGLE_DUNGEON: "Выберите подземелье",
        //
        [ESelectRoomHint.UPGRADE_SKILL_OR_ITEM]: "Поместите предмет или навык чтобы улучшить до следующего уровня",
        [ESelectRoomHint.ENHANT_SKILL_CHAINED]: "Поместите навык чтобы сделать его Цепным",
        [ESelectRoomHint.UPGRADE_HERO_TO_MC]: "ВЫБЕРИТЕ МУЛЬТИКЛАС",
        //
        [EItemAfterDuelBonusCondition.WON]: "Победа",
        [EItemAfterDuelBonusCondition.LOST]: "Поражение",
        [EItemAfterDuelBonusCondition.IS_HERO]: "Герой",
        [EItemAfterDuelBonusCondition.IS_MOB]: "Не герой",
    },
};
