import React, { Component } from "react";
import { Icon } from "./icon";

export default class Action extends Component {
  constructor(props) {
    super(props);

    this.status = false;

    this.handleAction = this.handleAction.bind(this);
  }

  handleAction() {
    this.props.onClick();

    if (!this.status) {
        document.getElementById(this.id).classList.add("action-remove");
    } else {
        document.getElementById(this.id).classList.remove("action-remove");
    }

    this.status = !this.status;

    
  }

  render() {
      this.id = `action-${this.props.id}`
    return (
      <a
        id={this.id}
        onClick={() => this.handleAction()}
        className={`${this.props.className} action`}
      />
    );

    // return (
    //     <button onClick={this.props.onClick} className={`${this.props.className} action`}>
    //         {Icon('fas fa-plus-circle')}
    //         {/* <i class="fas fa-times-circle"></i> */}
    //         {Icon()}
    //     </button>
    // )
  }
}
