import React from "react";
import "./../styles/desktop/logo.scss";

export function Logo(props) {
	return (
		<div className="logo">
			<p>{props.text}</p>
		</div>
	);
}
