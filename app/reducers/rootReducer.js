import { combineReducers } from "redux";
import { todoListReducer } from "./todoList";
import { pageReducer } from "./pageReducer";
import { tasksReducer } from "./tasks";

export const rootReducer = combineReducers({
	todoList: todoListReducer,
	page: pageReducer,
	tasks: tasksReducer
});
