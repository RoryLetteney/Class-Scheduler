import React, { Component } from "react";
import { Icon } from "../icon";

export default class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <label className="library-course__title">Problem Solving</label>
        {Icon("fas fa-check", "library-course__icon")}
        {/* arrow component */}
        {/* action button component */}        
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
