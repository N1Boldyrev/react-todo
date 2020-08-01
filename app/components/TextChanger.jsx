import React, { Component } from "react";
import "./../styles/desktop/textChanger.scss";

export class TextChanger extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputValue: this.props.placeholder
		};

		this.textInput = React.createRef();

		this.backToRoot = this.backToRoot.bind(this);
		this.change = this.change.bind(this);
		this.inputChange = this.inputChange.bind(this);
	}

	componentDidMount() {
		this.textInput.current.focus();
	}

	backToRoot() {
		this.props.setPageState(this.props.rootPage);
	}

	change() {
		let input = this.textInput.current;
		if (
			this.props.rootPage == "List" &&
			this.props.buttonText == "Изменить" &&
			input.value != ""
		) {
			this.props.changeElemName(
				input.value,
				this.props.elementId
			);
			this.backToRoot();
		} else if (
			this.props.rootPage == "List" &&
			this.props.buttonText == "Добавить" &&
			input.value != ""
		) {
			this.props.createNewElem(input.value);
			this.backToRoot();
		}
	}

	inputChange(event) {
		this.setState({ inputValue: event.target.value });
	}

	render() {
		return (
			<div className="textChanger">
				<div>{this.props.innerText}</div>

				<div>
					<input
						type="text"
						ref={this.textInput}
						value={this.state.inputValue}
						onChange={this.inputChange}
					/>
				</div>
				<div>
					<button onClick={this.backToRoot}>
						{"<<"}
					</button>
					<button onClick={this.change}>
						{this.props.buttonText}
					</button>
				</div>
			</div>
		);
	}
}
