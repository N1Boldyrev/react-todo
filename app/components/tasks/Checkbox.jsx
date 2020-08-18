import React, { Component } from "react";

export class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.setActive = this.setActive.bind(this);
        this.setChecked = this.setChecked.bind(this);
    }

    setActive() {
        this.props.setActiveTask(this.props.id);
    }

    setChecked() {
        this.props.setChecked(this.props.id);
    }

    render() {
        return (
            <div className="task">
                <span className={this.props.checkboxClass} onClick={this.setChecked}></span>
                <span className={this.props.className} onClick={this.setActive}>
                    {this.props.innerText}
                </span>
            </div>
        );
    }
}
