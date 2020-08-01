import { combineReducers } from "redux";
import { todoListReducer } from "./todoList";
import { pageReducer } from "./pageReducer";
import { tasksReducer } from "./tasks";
import { textChangerReducer } from "./textChanger";

export const rootReducer = combineReducers({
	todoList: todoListReducer,
	page: pageReducer,
	tasks: tasksReducer,
	textChanger: textChangerReducer
});
