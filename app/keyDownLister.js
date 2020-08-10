export function keyDownListner(
	event,
	pageState,
	setPageState,
	listActiveElem,
	listSetNonActive,
	listToolsClose,
	tasksActive,
	tasksCloseInstruments,
	textChangerRoot
) {
	console.log(event);
	let key = event.key;
	if (key == "Escape") {
		if (pageState == "List") {
			if (listActiveElem != null) {
				listSetNonActive();
				listToolsClose();
			}
		} else if (pageState == "WorkSection") {
			if (tasksActive != null) tasksCloseInstruments();
			else setPageState("List");
		} else if (pageState == "TextChanger")
			setPageState(textChangerRoot);
	}
}
