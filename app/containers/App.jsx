import React, { useState } from "react";
import { connect } from "react-redux";
import { List } from "./../components/List.jsx";
import { Logo } from "./../components/Logo.jsx";
import { WorkSection } from "./../components/WorkSection.jsx";
import "./../styles/desktop/body.scss";

function App(props) {
	const [pageState, setPageState] = useState(<List />);

	return (
		<div>
			<Logo text="DAILYPLANNER" />
			<div className="wrapper">{pageState}</div>
		</div>
	);
}

const mapStateToProps = store => {
	return {
		test: store.test,
		test2: store.test2
	};
};

export default connect(mapStateToProps)(App);
