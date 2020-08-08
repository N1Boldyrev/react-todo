import { getData, postData } from "./../fetch.js";

export function createNewTask(newTask) {
	postData("/createNewTask", { task: newTask });
	return {
		type: "NEW_TASK",
		payload: newTask
	};
}

export function deleteTask(id) {
	postData("/deleteTask", { id: id });
	return {
		type: "DELETE_TASK",
		payload: id
	};
}

export function closeInstruments() {
	return {
		type: "CLOSE_INSTRUMENTS"
	};
}

export function setActiveTask(id) {
	return {
		type: "SET_ACTIVE_TASK",
		payload: id
	};
}

export function setChecked(id) {
	return {
		type: "SET_CHECKED",
		payload: id
	};
}

export function changeTaskText(id, newText) {
	postData("/changeTask", { id: id, text: newText });
	return {
		type: "CHANGE_TASK_TEXT",
		payload: {
			id: id,
			newText: newText
		}
	};
}

export function checkTasksComplete() {
	return {
		type: "CHECK_ALL_TASKS_COMPLETE"
	};
}

export function getTasks(id) {
	return dispatch => {
		postData("/getTasks", { elemId: id }).then(data =>
			dispatch({
				type: "GET_TASKS_FROM_SERVER",
				payload: data
			})
		);
	};
}

export function setListId(id) {
	return {
		type: "SET_LIST_ID",
		payload: id
	};
}

export function setLoadedFalse() {
	return {
		type: "SET_LOADED_FALSE"
	};
}
