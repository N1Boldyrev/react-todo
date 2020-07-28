const initialState = {
	pageState: "WorkSection"
};

export function pageReducer(state = initialState, action) {
	switch (action.type) {
		case "SET_PAGE_STATE":
			return { ...state, pageState: action.payload };
		default:
			return state;
	}
}
