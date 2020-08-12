import React, { Component } from "react";

export class ListTools extends Component {
	constructor(props) {
		super(props);

		this.changeElement = this.changeElement.bind(this);
		this.deleteElement = this.deleteElement.bind(this);
		this.openTask = this.openTask.bind(this);
		this.closeTools = this.closeTools.bind(this);
		this.onKeydown = this.onKeydown.bind(this);
	}

	componentDidMount() {
		addEventListener("keydown", this.onKeydown);
	}

	componentWillUnmount() {
		removeEventListener("keydown", this.onKeydown);
	}

	onKeydown(event) {
		let key = event.key;
		if (key == "Enter") this.openTask();
		else if (key == "Delete") this.deleteElement();
		else if (key == "Escape") this.closeTools();
	}

	changeElement() {
		if (this.props.todoList.nowActive != null) {
			this.props.setTextChangerValue(
				"Изменение задачи",
				this.props.todoList.activeTitle,
				this.props.todoList.nowActive,
				"List",
				"Изменить"
			);
			this.props.setPageState("TextChanger");
		}
	}

	deleteElement() {
		let nowActive = this.props.todoList.nowActive;
		if (nowActive != null) {
			this.props.deleteElem(nowActive);
			this.props.listToolsClose();
		}
	}

	openTask() {
		this.props.setListId(this.props.todoList.nowActive);
		this.props.setPageState("WorkSection");
	}

	closeTools() {
		if (this.props.todoList.nowActive != null) {
			this.props.setNonActive(this.props.todoList.nowActive);
			this.props.listToolsClose();
		}
	}
	render() {
		return (
			<div className="list-tools">
				<button
					className="backButton"
					onClick={this.closeTools}
				>
					{"<<"}
				</button>
				<button onClick={this.changeElement}>
					Изменить
				</button>
				<button onClick={this.openTask}>Открыть</button>
				<button onClick={this.deleteElement}>
					Удалить
				</button>
			</div>
		);
	}
}
