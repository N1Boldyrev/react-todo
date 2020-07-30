import React from "react";
import { connect } from "react-redux";
import { List } from "./../components/List.jsx";
import { Logo } from "./../components/Logo.jsx";
import { WorkSection } from "./../components/WorkSection.jsx";
import { setActive } from "./../actions/listActions.js";
import {
	createNewTask,
	deleteTask,
	closeInstruments,
	setActiveTask,
	setChecked
} from "./../actions/tasksActions.js";
import { setPageState } from "./../actions/pageActions.js";
import "./../styles/desktop/body.scss";

function App(props) {
	const {
		todoList,
		page,
		tasks,
		setActiveAction,
		createNewTaskAction,
		deleteTaskAction,
		closeInstrumentsAction,
		setActiveTaskAction,
		setPageStateAction,
		setCheckedAction
	} = props;

	let pageState;

	if (page.pageState == "List")
		pageState = (
			<List
				tasks={todoList.tasks}
				setActive={setActiveAction}
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
				tasks={tasks.tasksList}
				instruments={tasks.instrumentsState}
				setPageState={setPageStateAction}
				setChecked={setCheckedAction}
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
	return {
		todoList: store.todoList,
		page: store.page,
		tasks: store.tasks
	};
};

const mapDispatchToProps = dispatch => ({
	setActiveAction: id => dispatch(setActive(id)),
	createNewTaskAction: newTask => dispatch(createNewTask(newTask)),
	deleteTaskAction: id => dispatch(deleteTask(id)),
	closeInstrumentsAction: () => dispatch(closeInstruments()),
	setActiveTaskAction: id => dispatch(setActiveTask(id)),
	setPageStateAction: state => dispatch(setPageState(state)),
	setCheckedAction: id => dispatch(setChecked(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
