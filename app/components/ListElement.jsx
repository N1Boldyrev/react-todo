import React from "react";
import "./../styles/desktop/listElement.scss";

export function ListElement(props) {
	return <div className={props.className}>{props.innerText}</div>;
}
