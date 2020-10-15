import React, { Component } from 'react';
import { render } from 'react-dom';
import IframeComponent from './IframeComponent';
//import './style.css';

export default class Temp extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div align="center">

	 <IframeComponent src="***********" width="1300" height="900"/>
	 <IframeComponent src="***********" width="1300" height="900"/>
      </div>
    );
  }
}

render(<Temp />, document.getElementById('root'));

