import React, { Component } from "react";

export class InstrumentsButtons extends Component {
	constructor(props) {
		super(props);

		this.deactiveTask = this.deactiveTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
		this.changeTask = this.changeTask.bind(this);
	}

	deactiveTask() {
		this.props.closeInstruments();
	}

	deleteTask() {
		this.props.deleteTask(this.props.currentTask);
	}

	changeTask() {
		if (this.props.currentTask != null) {
			this.props.setTextChangerValue(
				"Изменить задачу",
				this.props.currentTaskText,
				this.props.currentTask,
				"WorkSection",
				"Изменить"
			);
			this.props.setPageState("TextChanger");
		}
	}

	render() {
		return (
			<div className="workSection-instruments">
				<button onClick={this.deactiveTask}>
					{"<<"}
				</button>
				<button onClick={this.changeTask}>
					Изменить
				</button>
				<button onClick={this.deleteTask}>
					Удалить
				</button>
			</div>
		);
	}
}
