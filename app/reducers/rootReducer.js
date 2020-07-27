import { combineReducers } from "redux";
import { testReducer } from "./test";
import { test2Reducer } from "./test2";

export const rootReducer = combineReducers({
	test: testReducer,
	test2: test2Reducer
});
