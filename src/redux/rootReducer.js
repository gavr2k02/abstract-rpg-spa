import { combineReducers } from "redux";
import { appReducer } from "./appReducer";

import { personageReducer } from "./personageReducer";
export const rootReducer = combineReducers({
    personage: personageReducer,
    app: appReducer,
});
