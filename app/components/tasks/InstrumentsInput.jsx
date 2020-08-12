import React, { Component } from "react";

export class InstrumentsInput extends Component {
	constructor(props) {
		super(props);
		this.addNewTask = this.addNewTask.bind(this);
		this.backToTaskList = this.backToTaskList.bind(this);
		this.onKeydown = this.onKeydown.bind(this);
		this.inputRef = React.createRef();
	}

	componentDidMount() {
		this.inputRef.current.focus();
		addEventListener("keydown", this.onKeydown);
		this.props.setLoadedFalse();
	}

	componentWillUnmount() {
		removeEventListener("keydown", this.onKeydown);
	}

	onKeydown(event) {
		let key = event.key;
		if (key == "Escape") {
			this.backToTaskList();
		} else if (key == "Enter") this.addNewTask();
	}

	addNewTask() {
		const input = this.inputRef.current;
		if (input.value != "") {
			const task = {
				text: input.value,
				id: Math.random().toString(),
				className: "checkboxText",
				checkboxClass: "fakeCheckbox",
				checked: false,
				elemId: this.props.globalTasks.listId
			};
			this.props.createNewTask(task);
			input.value = "";
		}
	}

	backToTaskList() {
		this.props.setListId("");
		this.props.setPageState("List");
	}

	render() {
		return (
			<div className="input">
				<button onClick={this.backToTaskList}>
					{"<<"}
				</button>
				<input
					type="text"
					ref={this.inputRef}
					placeholder="Что нужно сделать?"
				/>
				<button onClick={this.addNewTask}>
					Добавить
				</button>
			</div>
		);
	}
}
