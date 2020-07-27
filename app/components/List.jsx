import React from "react";
import { ListElement } from "./ListElement.jsx";
import "./../styles/desktop/list.scss";

export function List() {
	return (
		<div className="list">
			<div className="elements">
				<ListElement
					className="listElement"
					innerText="Test"
				/>
				<ListElement
					className="listElement active"
					innerText="Active element"
				/>
			</div>
			<div className="list-tools">
				<button>Добавить</button>
				<button>Открыть</button>
				<button>Удалить</button>
			</div>
		</div>
	);
}
