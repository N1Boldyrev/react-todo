import React, { Component } from "react";
import { ListElement } from "./ListElement.jsx";
import "./../styles/desktop/list.scss";

export class List extends Component {
	constructor(props) {
		super(props);

		this.changeElement = this.changeElement.bind(this);
		this.createElement = this.createElement.bind(this);
		this.deleteElement = this.deleteElement.bind(this);
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

	deleteElement() {
		let nowActive = this.props.todoList.nowActive;
		if (nowActive != null) this.props.deleteElem(nowActive);
	}

	render() {
		return (
			<div className="list">
				<div className="elements">
					{this.props.tasks.map(elem => (
						<ListElement
							className={
								elem.className
							}
							innerText={
								elem.taskName
							}
							key={elem.id}
							id={elem.id}
							setActive={
								this.props
									.setActive
							}
						/>
					))}
				</div>
				<div className="list-tools">
					<button onClick={this.createElement}>
						Добавить
					</button>
					<button onClick={this.changeElement}>
						Изменить
					</button>
					<button>Открыть</button>
					<button onClick={this.deleteElement}>
						Удалить
					</button>
				</div>
			</div>
		);
	}
}
