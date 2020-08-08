const initialState = {
	tasks: [],
	nowActive: null,
	activeTitle: "",
	listToolsIsOpen: false,
	wasLoadedFromServer: false
};

export function todoListReducer(state = initialState, action) {
	switch (action.type) {
		case "SET_ACTIVE": {
			let newObj = Object.assign({}, state);
			for (let key in state.tasks) {
				if (
					// Проверяем активный элемент и делаем неактивным
					state.tasks[key].id ==
						state.nowActive &&
					state.nowActive != action.payload
				) {
					newObj.tasks[key].className =
						"listElement";
				}
				if (state.tasks[key].id == action.payload) {
					//Делаем нажатый элемент активным
					newObj.tasks[key].className =
						"listElement active";
					newObj.nowActive = action.payload;
					newObj.activeTitle =
						state.tasks[key].taskName;
					newObj.listToolsIsOpen = true;
				}
			}
			return newObj;
		}
		case "CREATE_NEW_ELEM": {
			let newObj = Object.assign({}, state);
			let payload = {
				taskName: action.payload.taskName,
				className: "listElement",
				id: action.payload.id
			};
			newObj.tasks.push(payload);
			return newObj;
		}

		case "CHANGE_ELEM_NAME": {
			let newObj = Object.assign({}, state);
			for (let key in state.tasks) {
				if (state.tasks[key].id == action.payload.id) {
					newObj.tasks[key].taskName =
						action.payload.newName;
					newObj.activeTitle =
						action.payload.newName;
					return newObj;
				}
			}
		}

		case "DELETE_ELEM": {
			let newObj = Object.assign({}, state);
			for (let key in state.tasks) {
				if (state.tasks[key].id == action.payload) {
					newObj.tasks.splice(key, 1);
					newObj.nowActive = null;
					return newObj;
				}
			}
		}

		case "CLOSE_TOOLS": {
			if (state.listToolsIsOpen == true)
				return {
					...state,
					listToolsIsOpen: false
				};
		}

		case "SET_NON_ACTIVE": {
			let newObj = Object.assign({}, state);
			for (let key in state.tasks) {
				if (state.tasks[key].id == action.payload) {
					newObj.tasks[key].className =
						"listElement";
					newObj.nowActive = null;
					return newObj;
				}
			}
		}

		case "GET_LIST_FROM_SERVER": {
			return {
				...state,
				tasks: action.payload,
				wasLoadedFromServer: true
			};
		}

		default:
			return state;
	}
}
