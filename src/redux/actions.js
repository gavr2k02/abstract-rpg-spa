import {
    UPDATE_PERSONAGE,
    UPDATE_NAME,
    UPDATE_BASE_PARAMETRS,
    UPDATE_CHARACTERISTIC,
    UPDATE_POWER_SKILLS,
    UPDATE_AGILITY_SKILLS,
    UPDATE_CHARISMA_SKILLS,
    UPDATE_INTELIGENCE_SKILLS,
    RECEIVED_DAMAGE,
    RECEIVED_DAMAGE_SHOW,
    RECEIVED_DAMAGE_HIDE,
} from "./types";

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name,
    };
}

export function updateBaseParametrs(baseParametrs) {
    return {
        type: UPDATE_BASE_PARAMETRS,
        payload: baseParametrs,
    };
}

export function updateCharacteristic(baseParametrs) {
    const characteristic = {
        lifeForce: 3 + Number(baseParametrs.power),
        evasion: 10 + Number(baseParametrs.agility),
        energy:
            Number(baseParametrs.agility) + Number(baseParametrs.intelligence),
    };

    return {
        type: UPDATE_CHARACTERISTIC,
        payload: characteristic,
    };
}

export function updatePowerSkills(skill) {
    return {
        type: UPDATE_POWER_SKILLS,
        payload: skill,
    };
}
export function updateAgilitySkills(skill) {
    return {
        type: UPDATE_AGILITY_SKILLS,
        payload: skill,
    };
}
export function updateInteligenceSkills(skill) {
    return {
        type: UPDATE_INTELIGENCE_SKILLS,
        payload: skill,
    };
}
export function updateCharismaSkills(skill) {
    return {
        type: UPDATE_CHARISMA_SKILLS,
        payload: skill,
    };
}

export function receivedDamage(characteristic) {
    return {
        type: RECEIVED_DAMAGE,
        payload: characteristic,
    };
}

export function damageHeroShow() {
    return {
        type: RECEIVED_DAMAGE_SHOW,
    };
}

export function damageHeroHide() {
    return {
        type: RECEIVED_DAMAGE_HIDE,
    };
}

export function updatePersonage(personage) {
    return {
        type: UPDATE_PERSONAGE,
        payload: personage,
    };
}
