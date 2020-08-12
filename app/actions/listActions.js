import { getData, postData } from "./../fetch.js";

export function setActive(id) {
        return {
                type: "SET_ACTIVE",
                payload: id
        };
}

export function createNewElem(elemName) {
        let id = Math.random();
        postData("/addNewElement", { taskName: elemName, id: id });
        return {
                type: "CREATE_NEW_ELEM",
                payload: {
                        taskName: elemName,
                        id: id
                }
        };
}

export function changeElemName(newName, id) {
        postData("/changeListElem", { taskName: newName, id: id });
        return {
                type: "CHANGE_ELEM_NAME",
                payload: {
                        newName: newName,
                        id: id
                }
        };
}

export function deleteElem(id) {
        postData("/deleteListElem", { id: id });
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

export function getList() {
        return dispatch => {
                getData("/getList").then(data => {
                        dispatch({
                                type: "GET_LIST_FROM_SERVER",
                                payload: data
                        });
                });
        };
}
