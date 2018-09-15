import React, { Component } from "react";
import { Icon } from "../icon";
import Arrow from "../arrow";
import Action from "../action";

export default class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <div className="library-course__title-check">
          <label className="library-course__title">Problem Solving</label>
          {Icon("fas fa-check", "library-course__icon")}
        </div>
        <Arrow className="library-course__arrow"/>
        <Action className="library-course__action"/>        
        <div className="library-course__description">
          <label>Course Description</label>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sagittis, lorem eget facilisis lacinia, tortor mauris congue velit,
            non malesuada nisl lorem hendrerit mauris. Vestibulum in tellus
            pharetra, venenatis risus at, lacinia tortor. Suspendisse aliquam
            arcu metus, a rhoncus velit feugiat in.
          </p>
        </div>
      </div>
    );
  }
}
