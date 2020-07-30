import React, { Component } from "react";

export class InstrumentsButtons extends Component {
	constructor(props) {
		super(props);

		this.deactiveTask = this.deactiveTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}

	deactiveTask() {
		this.props.closeInstruments();
	}

	deleteTask() {
		this.props.deleteTask(this.props.currentTask);
	}

	render() {
		return (
			<div className="workSection-instruments">
				<button onClick={this.deactiveTask}>
					{"<<"}
				</button>
				<button>Изменить</button>
				<button onClick={this.deleteTask}>
					Удалить
				</button>
			</div>
		);
	}
}
