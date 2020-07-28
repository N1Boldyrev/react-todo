import React from "react";
import { ListElement } from "./ListElement.jsx";
import "./../styles/desktop/list.scss";

export function List(props) {
	const { tasks, setActive } = props;

	return (
		<div className="list">
			<div className="elements">
				{tasks.map(elem => (
					<ListElement
						className={elem.className}
						innerText={elem.taskName}
						key={elem.id}
						id={elem.id}
						setActive={setActive}
					/>
				))}
			</div>
			<div className="list-tools">
				<button>Добавить</button>
				<button>Открыть</button>
				<button>Удалить</button>
			</div>
		</div>
	);
}
