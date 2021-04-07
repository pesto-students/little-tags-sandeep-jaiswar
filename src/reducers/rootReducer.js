import { combineReducers } from "redux";
import asyncReducer from "./asyncReducer";

const rootReducer = combineReducers({
  async: asyncReducer
});

export default rootReducer;