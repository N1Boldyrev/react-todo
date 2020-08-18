import React, { Component } from "react";

export class ListElement extends Component {
    constructor(props) {
        super(props);
    }

    elemClicked(id) {
        this.props.setActive(id);
    }

    render() {
        return (
            <div onClick={this.elemClicked.bind(this, this.props.id)} className={this.props.className}>
                {this.props.innerText}
            </div>
        );
    }
}
