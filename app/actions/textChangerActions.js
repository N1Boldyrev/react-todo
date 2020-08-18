export function textChangerSetValue(innerText, placeholder, elementId, rootPage, buttonText) {
    return {
        type: "SET_VALUES",
        payload: {
            innerText: innerText,
            placeholder: placeholder,
            elementId: elementId,
            rootPage: rootPage,
            buttonText: buttonText
        }
    };
}
