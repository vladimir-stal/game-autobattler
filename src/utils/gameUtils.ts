import {
    EItemType,
    EMobAction,
    ERoomObjectStatus,
    ERoomObjectType,
    EWeaponType,
    House,
    HouseFloor,
    HouseRoom,
    HouseRoomObject,
    IDude,
    IDudeActionChange,
    IHouseChange,
    IHouseGlobals,
    IMob,
    IRiddle,
} from "../types";

export const getHouseFromSchema = (houseSchema: any): House => {
    // houseSchema: HouseSchema from ../../../server/src/entities/house/House';
    return {
        floors: Array.from(houseSchema.floors.values()).map((floorSchema) => getFloorFromSchema(floorSchema)),
    };
};

const getFloorFromSchema = (floorSchema: any): HouseFloor => {
    // floorSchema: HouseFloorSchema
    return {
        number: floorSchema.number,
        rooms: Array.from(floorSchema.rooms.values()).map((roomSchema) => geRoomFromSchema(roomSchema)),
    };
};

const geRoomFromSchema = (roomSchema: any): HouseRoom => {
    //TODO: any?
    // roomSchema: HouseRoomSchema
    return {
        ...roomSchema,
        type: roomSchema.type as ERoomObjectType,
        objects: Array.from(roomSchema.objects.values()).map((objectSchema) => getRoomObjectFromSchema(objectSchema)),
        groundTextures: Array.from(roomSchema.groundTextures.values()),
    };
};

export const getRoomObjectFromSchema = (roomObjectSchema: any): HouseRoomObject => {
    // roomObjectSchema: HouseRoomObjectSchema
    return {
        ...roomObjectSchema,
        type: roomObjectSchema.type as ERoomObjectType,
        status: roomObjectSchema.status as ERoomObjectStatus,
        interactItemType: roomObjectSchema.interactItemType as EItemType,
        riddle: roomObjectSchema.riddle ? (roomObjectSchema.riddle as IRiddle) : undefined,
        //items: roomObjectSchema.type === ERoomObjectType.TREASURE_CHEST ? roomObjectSchema.items : undefined
    };
};

export const getDudeFromSchema = (dudeSchema: any): IDude => {
    //console.log("get DUDE FROm SchemA");
    //TODO: change to server side dudeSchema: DudeSchema
    return {
        ...dudeSchema,
        //actionTarget1Id: dudeSchema.action.actionTarget1Id,
        actionType: dudeSchema.action.actionType,
        weaponType: dudeSchema.weaponType as EWeaponType,
    };
};

export const getMobFromSchema = (mobSchema: any): IMob => {
    return {
        ...mobSchema,
        action: mobSchema.action as EMobAction,
    };
};

export const getHouseChangeFromSchema = (houseChange: any): IHouseChange => {
    const { roomObject, type } = houseChange;
    return {
        type,
        roomObject: roomObject && getRoomObjectFromSchema(roomObject),
    };
};

export const getDudeActionChangeFromSchema = (actionChange: any): IDudeActionChange => {
    return {
        ...actionChange,
    };
};

export const getHouseGlobalsFromSchema = (globals: any): IHouseGlobals => {
    return {
        ...globals,
    };
};
