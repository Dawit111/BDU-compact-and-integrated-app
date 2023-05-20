import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import postReducer from "./PostReducer";
import chatReducer from "./ChatUserReducer";
import qaReducer from "./QaReducer";

export const reducers = combineReducers({authReducer,postReducer, chatReducer, qaReducer})