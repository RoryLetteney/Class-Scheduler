import React, { Component } from "react";

export default class ProgressTracker extends Component {

  constructor(props) {
    super(props);

    this.calculateProgress = this.calculateProgress.bind(this)
  }

  calculateProgress() {
    return (this.props.amountEnrolled / this.props.amountPossible) * 100 + '%'
  }

  render() {
    return (
      <div className="progress-tracker">
        <label className="progress-tracker__label">Progress Tracker</label>
        <div className="progress-tracker__percentage">{this.calculateProgress()}</div>
      </div>
    );
  }
}
