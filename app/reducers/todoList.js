const initialState = {
	tasks: [
		{
			taskName: "Hello from redux",
			className: "listElement",
			id: 1
		},
		{
			taskName: "Hello from redux2",
			className: "listElement",
			id: 2
		}
	],
	nowActive: null,
	activeTitle: ""
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
				}
			}
			return newObj;
		}
		case "CREATE_NEW_ELEM": {
			let newObj = Object.assign({}, state);
			let payload = {
				taskName: action.payload,
				className: "listElement",
				id: Math.random()
			};
			newObj.tasks.push(payload);
			return newObj;
		}

		case "CHANGE_ELEM_NAME": {
			let newObj = Object.assign({}, state);
			for (let key in state.tasks) {
				if (state.tasks[key].id == action.payload.id) {
					state.tasks[key].taskName =
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

		default:
			return state;
	}
}
