const initialState = {
    innerText: "",
    placeholder: "",
    elementId: "",
    rootPage: "",
    buttonText: ""
};

export function textChangerReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_VALUES": {
            return {
                ...state,
                innerText: action.payload.innerText,
                placeholder: action.payload.placeholder,
                elementId: action.payload.elementId,
                rootPage: action.payload.rootPage,
                buttonText: action.payload.buttonText
            };
        }
        default:
            return state;
    }
}
