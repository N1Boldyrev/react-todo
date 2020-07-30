export function createNewTask(newTask) {
	return {
		type: "NEW_TASK",
		payload: newTask
	};
}

export function deleteTask(id) {
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
