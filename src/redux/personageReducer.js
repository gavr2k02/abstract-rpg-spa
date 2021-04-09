import {
    UPDATE_NAME,
    UPDATE_BASE_PARAMETRS,
    UPDATE_CHARACTERISTIC,
    UPDATE_POWER_SKILLS,
    UPDATE_AGILITY_SKILLS,
    UPDATE_INTELIGENCE_SKILLS,
    UPDATE_CHARISMA_SKILLS,
    RECEIVED_DAMAGE,
    UPDATE_PERSONAGE,
} from "./types";

const initialState = {
    name: "",
    baseParametrs: {
        power: 0,
        agility: 0,
        intelligence: 0,
        charisma: 0,
    },
    characteristic: {
        lifeForce: 3,
        evasion: 10,
        energy: 0,
    },
    powerSkills: [{ name: "Атака", lvl: 0 }],
    agilitySkills: [
        { name: "Стелс", lvl: 0 },
        { name: "Стрельба", lvl: 0 },
    ],
    intelligenceSkills: [
        { name: "Обучаемость", lvl: 0 },
        { name: "Выживание", lvl: 0 },
        { name: "Медицина", lvl: 0 },
    ],
    charismaSkills: [
        { name: "Запугивание", lvl: 0 },
        { name: "Проницательность", lvl: 0 },
        { name: "Внешний вид", lvl: 0 },
        { name: "Манипулирование", lvl: 0 },
    ],
};

export const personageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PERSONAGE:
            return {
                ...action.payload,
            };

        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload,
            };

        case UPDATE_BASE_PARAMETRS:
            return {
                ...state,
                baseParametrs: action.payload,
            };

        case UPDATE_CHARACTERISTIC:
            return {
                ...state,
                characteristic: action.payload,
            };

        case UPDATE_POWER_SKILLS:
            return {
                ...state,
                powerSkills: state.powerSkills.map((skill) =>
                    skill.name === action.payload.name
                        ? {
                              ...skill,
                              name: action.payload.name,
                              lvl: action.payload.lvl + 1,
                          }
                        : skill
                ),
            };

        case UPDATE_AGILITY_SKILLS:
            return {
                ...state,
                agilitySkills: state.agilitySkills.map((skill) =>
                    skill.name === action.payload.name
                        ? {
                              ...skill,
                              name: action.payload.name,
                              lvl: action.payload.lvl + 1,
                          }
                        : skill
                ),
            };

        case UPDATE_INTELIGENCE_SKILLS:
            return {
                ...state,
                intelligenceSkills: state.intelligenceSkills.map((skill) =>
                    skill.name === action.payload.name
                        ? {
                              ...skill,
                              name: action.payload.name,
                              lvl: action.payload.lvl + 1,
                          }
                        : skill
                ),
            };

        case UPDATE_CHARISMA_SKILLS:
            return {
                ...state,
                charismaSkills: state.charismaSkills.map((skill) =>
                    skill.name === action.payload.name
                        ? {
                              ...skill,
                              name: action.payload.name,
                              lvl: action.payload.lvl + 1,
                          }
                        : skill
                ),
            };

        case RECEIVED_DAMAGE:
            return { ...state, characteristic: action.payload };

        default:
            return state;
    }
};
