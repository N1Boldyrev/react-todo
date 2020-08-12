import React, { Component } from "react";

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
		this.onKeydown = this.onKeydown.bind(this);
	}

	componentDidMount() {
		this.textInput.current.focus();
		addEventListener("keydown", this.onKeydown);
	}

	componentWillUnmount() {
		removeEventListener("keydown", this.onKeydown);
	}

	onKeydown(event) {
		let key = event.key;

		if (key == "Escape") {
			this.backToRoot();
		} else if (key == "Enter") {
			this.change();
		}
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
		} else if (
			this.props.rootPage == "WorkSection" &&
			input.value != ""
		) {
			this.props.changeTaskText(
				this.props.elementId,
				input.value
			);
			this.backToRoot();
		}
	}

	inputChange(event) {
		this.setState({ inputValue: event.target.value });
	}

	render() {
		return (
			<div className="textChanger">
				<div className="textChanger-text">
					{this.props.innerText}
				</div>

				<div className="textChanger-input">
					<input
						type="text"
						ref={this.textInput}
						value={this.state.inputValue}
						onChange={this.inputChange}
					/>
				</div>
				<div className="textChanger-instruments">
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
