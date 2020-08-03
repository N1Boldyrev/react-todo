import React from "react";
import { ListElement } from "./ListElement.jsx";
import { ListTools } from "./ListTools.jsx";
import { ListAddElement } from "./ListAddElement.jsx";
import "./../styles/desktop/list.scss";

export function List(props) {
	let listTools;
	if (props.todoList.listToolsIsOpen == false) {
		listTools = (
			<ListAddElement
				setTextChangerValue={props.setTextChangerValue}
				todoList={props.todoList}
				setPageState={props.setPageState}
			/>
		);
	} else {
		listTools = (
			<ListTools
				setTextChangerValue={props.setTextChangerValue}
				todoList={props.todoList}
				setPageState={props.setPageState}
				deleteElem={props.deleteElem}
				listToolsClose={props.listToolsClose}
				setNonActive={props.setNonActive}
			/>
		);
	}

	return (
		<div className="list">
			<div className="elements">
				{props.tasks.map(elem => (
					<ListElement
						className={elem.className}
						innerText={elem.taskName}
						key={elem.id}
						id={elem.id}
						setActive={props.setActive}
					/>
				))}
			</div>
			{listTools}
		</div>
	);
}
