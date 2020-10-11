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

	 <IframeComponent src="https://datastudio.google.com/embed/reporting/fbee6a90-980b-4bd5-b99a-dedb9111bfa8/page/qhijB" height="900" width="1300"/>
	 <IframeComponent src="https://datastudio.google.com/embed/reporting/0fa05caa-db85-45b1-a2f2-c6a8afab42a2/page/CIijB" height="900" width="1300"/>
      </div>
    );
  }
}

render(<Temp />, document.getElementById('root'));

