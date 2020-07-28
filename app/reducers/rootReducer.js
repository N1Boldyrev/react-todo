import { combineReducers } from "redux";
import { todoListReducer } from "./todoList";
import { pageReducer } from "./pageReducer";

export const rootReducer = combineReducers({
	todoList: todoListReducer,
	page: pageReducer
});
