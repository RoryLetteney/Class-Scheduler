import React, { Component } from 'react';
import { Icon } from './icon';

export default class Action extends Component {
   render() {
       return (
           <div className={`${this.props.className} action`}>
               {Icon('fas fa-plus-circle')}
               {/* <i class="fas fa-times-circle"></i> */}
               {Icon()}
           </div>
       )
   }
}