import React from "react";
import { connect } from "react-redux";
import { List } from "./../components/List.jsx";
import { Logo } from "./../components/Logo.jsx";
import { WorkSection } from "./../components/WorkSection.jsx";
import { setActive } from "./../actions/listActions.js";
import "./../styles/desktop/body.scss";

function App(props) {
	const { todoList, page, setActiveAction } = props;

	let pageState;

	if (page.pageState == "List")
		pageState = (
			<List
				tasks={todoList.tasks}
				setActive={setActiveAction}
			/>
		);
	else if (page.pageState == "WorkSection") {
		pageState = <WorkSection />;
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
		page: store.page
	};
};

const mapDispatchToProps = dispatch => ({
	setActiveAction: id => dispatch(setActive(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
