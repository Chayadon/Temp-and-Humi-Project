import React, { Component } from 'react';
import ButtonRegister from "../register/ButtonRegister";
import ButtonShowdata from "../showdata/ButtonShowdata";
import Facebook from "./Facebook";
import FacebookLogin from "react-facebook-login" ;
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron mb-0 text-white bg" style={{ height: '60%' }}>
          <h1 >Welcome to React</h1>
          <div className="my-3"><Facebook /></div>
          <div className="my-5">
            <img className="logo" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" style={{ height: '100px', width: '100px' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
