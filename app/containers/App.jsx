import React from "react";
import { connect } from "react-redux";
import { List } from "./../components/List.jsx";
import { Logo } from "./../components/Logo.jsx";
import { WorkSection } from "./../components/WorkSection.jsx";
import { TextChanger } from "./../components/TextChanger.jsx";
import {
	setActive,
	createNewElem,
	changeElemName,
	deleteElem,
	listToolsClose,
	setNonActive
} from "./../actions/listActions.js";
import {
	createNewTask,
	deleteTask,
	closeInstruments,
	setActiveTask,
	setChecked,
	changeTaskText
} from "./../actions/tasksActions.js";
import { setPageState } from "./../actions/pageActions.js";
import { textChangerSetValue } from "./../actions/textChangerActions.js";
import "./../styles/desktop/body.scss";

function App(props) {
	const {
		todoList,
		page,
		tasks,
		textChanger,
		setActiveAction,
		createNewTaskAction,
		deleteTaskAction,
		closeInstrumentsAction,
		setActiveTaskAction,
		setPageStateAction,
		setCheckedAction,
		textChangerSetValueAction,
		createNewElemAction,
		changeElemNameAction,
		deleteElemAction,
		changeTaskTextAction,
		listToolsCloseAction,
		setNonActiveAction
	} = props;

	let pageState;

	if (page.pageState == "List")
		pageState = (
			<List
				tasks={todoList.tasks}
				todoList={todoList}
				setActive={setActiveAction}
				setPageState={setPageStateAction}
				setTextChangerValue={textChangerSetValueAction}
				deleteElem={deleteElemAction}
				listToolsClose={listToolsCloseAction}
				setNonActive={setNonActiveAction}
			/>
		);
	else if (page.pageState == "WorkSection") {
		pageState = (
			<WorkSection
				createNewTask={createNewTaskAction}
				deleteTask={deleteTaskAction}
				closeInstruments={closeInstrumentsAction}
				setActiveTask={setActiveTaskAction}
				currentTask={tasks.currentTask}
				currentTaskText={tasks.currentTaskText}
				tasks={tasks.tasksList}
				instruments={tasks.instrumentsState}
				setPageState={setPageStateAction}
				setChecked={setCheckedAction}
				setTextChangerValue={textChangerSetValueAction}
			/>
		);
	} else if (page.pageState == "TextChanger") {
		pageState = (
			<TextChanger
				innerText={textChanger.innerText}
				placeholder={textChanger.placeholder}
				elementId={textChanger.elementId}
				rootPage={textChanger.rootPage}
				buttonText={textChanger.buttonText}
				setPageState={setPageStateAction}
				setTextChangerValue={textChangerSetValueAction}
				createNewElem={createNewElemAction}
				changeElemName={changeElemNameAction}
				changeTaskText={changeTaskTextAction}
			/>
		);
	}

	return (
		<div>
			<Logo text="DAILYPLANNER" />
			<div className="wrapper">{pageState}</div>
		</div>
	);
}

const mapStateToProps = store => {
	console.log(store);
	return {
		todoList: store.todoList,
		page: store.page,
		tasks: store.tasks,
		textChanger: store.textChanger
	};
};

const mapDispatchToProps = dispatch => ({
	setActiveAction: id => dispatch(setActive(id)),
	createNewTaskAction: newTask => dispatch(createNewTask(newTask)),
	deleteTaskAction: id => dispatch(deleteTask(id)),
	closeInstrumentsAction: () => dispatch(closeInstruments()),
	setActiveTaskAction: id => dispatch(setActiveTask(id)),
	setPageStateAction: state => dispatch(setPageState(state)),
	setCheckedAction: id => dispatch(setChecked(id)),
	textChangerSetValueAction: (
		innerText,
		placeholder,
		elementId,
		rootPage,
		buttonText
	) =>
		dispatch(
			textChangerSetValue(
				innerText,
				placeholder,
				elementId,
				rootPage,
				buttonText
			)
		),
	createNewElemAction: elemName => dispatch(createNewElem(elemName)),
	changeElemNameAction: (newName, id) =>
		dispatch(changeElemName(newName, id)),
	deleteElemAction: id => dispatch(deleteElem(id)),
	changeTaskTextAction: (id, newText) =>
		dispatch(changeTaskText(id, newText)),
	listToolsCloseAction: () => dispatch(listToolsClose()),
	setNonActiveAction: id => dispatch(setNonActive(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
