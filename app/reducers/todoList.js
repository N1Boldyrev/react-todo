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
	nowActive: null
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
				}
			}
			return newObj;
		}
		default:
			return state;
	}
}
