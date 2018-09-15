import React, { Component } from 'react';
import LibraryCourse from './libraryCourse';

export default class Library extends Component {
   render() {
       return (
           <div className="library">
               <h1 className="library__title">Course Library</h1>
               <div className="library__courses">
                <LibraryCourse/>
                <LibraryCourse/>
                <LibraryCourse/>
                </div>
           </div>
       )
   }
}