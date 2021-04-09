import { RECEIVED_DAMAGE_SHOW, RECEIVED_DAMAGE_HIDE } from "./types";

const initialState = {
    damageHeroShow: false,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_DAMAGE_SHOW:
            return {
                ...state,
                damageHeroShow: true,
            };
        case RECEIVED_DAMAGE_HIDE:
            return {
                ...state,
                damageHeroShow: false,
            };
        default:
            return state;
    }
};
