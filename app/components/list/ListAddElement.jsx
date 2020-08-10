import React, { Component } from "react";

export class ListAddElement extends Component {
	constructor(props) {
		super(props);

		this.createElement = this.createElement.bind(this);
	}

	createElement() {
		this.props.setTextChangerValue(
			"Добавление задачи",
			"",
			"",
			"List",
			"Добавить"
		);
		this.props.setPageState("TextChanger");
	}

	render() {
		return (
			<div className="listAddElement">
				<button onClick={this.createElement}>
					Добавить
				</button>
			</div>
		);
	}
}
