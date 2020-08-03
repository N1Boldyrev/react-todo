export function setActive(id) {
	return {
		type: "SET_ACTIVE",
		payload: id
	};
}

export function createNewElem(elemName) {
	return {
		type: "CREATE_NEW_ELEM",
		payload: elemName
	};
}

export function changeElemName(newName, id) {
	return {
		type: "CHANGE_ELEM_NAME",
		payload: {
			newName: newName,
			id: id
		}
	};
}

export function deleteElem(id) {
	return {
		type: "DELETE_ELEM",
		payload: id
	};
}

export function listToolsClose() {
	return {
		type: "CLOSE_TOOLS"
	};
}

export function setNonActive(id) {
	return {
		type: "SET_NON_ACTIVE",
		payload: id
	};
}
