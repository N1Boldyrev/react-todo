const initialState = {
	tasksList: [
		{
			text: "blah blah blah",
			id: 1,
			className: "checkboxText",
			checkboxClass: "fakeCheckbox",
			checked: false
		}
	],
	currentTask: null,
	currentTaskText: "",
	instrumentsState: "instruments close",
	allTasksComplete: false
};

export function tasksReducer(state = initialState, action) {
	switch (action.type) {
		case "NEW_TASK": {
			//Добавляем новую задачу
			let newTask = {
				text: action.payload.text,
				id: action.payload.id,
				className: action.payload.className,
				checkboxClass: action.payload.checkboxClass,
				checked: action.payload.checked
			};
			let updateTaskList = state.tasksList;
			updateTaskList.push(newTask);
			return { ...state, tasksList: updateTaskList };
		}

		case "DELETE_TASK": {
			// Удаление задачи
			let newObj = Object.assign({}, state);
			for (let key in state.tasksList) {
				if (state.tasksList[key].id == action.payload) {
					newObj.tasksList.splice(key, 1);
					newObj.instrumentsState =
						"instruments close";
					return newObj;
				}
			}
		}

		case "CLOSE_INSTRUMENTS": {
			//Закрываем панель инструментов
			let newObj = Object.assign({}, state);
			for (let key in state.tasksList) {
				if (
					state.tasksList[key].id ==
					state.currentTask
				) {
					newObj.tasksList[key].className =
						"checkboxText";
				}
			}
			newObj.currentTask = null;
			newObj.instrumentsState = "instruments close";
			return newObj;
		}

		case "SET_ACTIVE_TASK": {
			//Делаем задачу активной при нажатии
			let newObj = Object.assign({}, state);
			for (let key in state.tasksList) {
				if (
					state.tasksList[key].id ==
						state.currentTask &&
					action.payload != state.currentTask
				) {
					newObj.tasksList[key].className =
						"checkboxText";
				}
				if (state.tasksList[key].id == action.payload) {
					newObj.tasksList[key].className =
						"checkboxText active";
					newObj.currentTask = action.payload;
					newObj.currentTaskText =
						state.tasksList[key].text;

					if (
						state.instrumentsState ==
						"instruments close"
					)
						newObj.instrumentsState =
							"instruments open";
				}
			}
			return newObj;
		}

		case "SET_CHECKED": {
			//Меняем состояние чекбокса
			let newObj = Object.assign({}, state);
			for (let key in state.tasksList) {
				if (state.tasksList[key].id == action.payload) {
					if (
						state.tasksList[key].checked ==
						false
					) {
						newObj.tasksList[
							key
						].checked = true;
						newObj.tasksList[
							key
						].checkboxClass =
							"fakeCheckbox checked";
					} else {
						newObj.tasksList[
							key
						].checked = false;
						newObj.tasksList[
							key
						].checkboxClass =
							"fakeCheckbox";
					}
					return newObj;
				}
			}
		}

		case "CHANGE_TASK_TEXT": {
			let newObj = Object.assign({}, state);
			for (let key in state.tasksList) {
				if (
					state.tasksList[key].id ==
					action.payload.id
				) {
					newObj.tasksList[key].text =
						action.payload.newText;
					return newObj;
				}
			}
		}

		case "CHECK_ALL_TASKS_COMPLETE": {
			let tasksComplete = true;
			for (let key in state.tasksList) {
				if (state.tasksList[key].checked == false) {
					tasksComplete = false;
					break;
				}
			}
			return { ...state, allTasksComplete: tasksComplete };
		}

		default:
			return state;
	}
}
