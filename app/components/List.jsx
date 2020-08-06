import React, { useEffect } from "react";
import { ListElement } from "./ListElement.jsx";
import { ListTools } from "./ListTools.jsx";
import { ListAddElement } from "./ListAddElement.jsx";
import "./../styles/desktop/list.scss";

export function List(props) {
	let listInner;
	useEffect(() => {
		if (props.todoList.wasLoadedFromServer == false)
			props.getList();
		console.log("udate");
	});

	if (props.tasks.length == 0) {
		listInner = <div className="listEmptyText">Пока нет задач</div>;
	} else {
		listInner = (
			<div className="elements">
				{props.tasks.map(elem => (
					<ListElement
						className={elem.className}
						innerText={elem.taskName}
						key={elem._id}
						id={elem._id}
						setActive={props.setActive}
					/>
				))}
			</div>
		);
	}

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
			{listInner}
			{listTools}
		</div>
	);
}
