import React, { Component } from "react";
import { Icon } from "./icon";

export default class Action extends Component {
  constructor(props) {
    super(props);

    this.handleAction = this.handleAction.bind(this);
  }

  handleAction() {
    this.props.onClick();

    // document.getElementById('action').classList.add('')
  }

  render() {
    return (
      <a
        id="action"
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
