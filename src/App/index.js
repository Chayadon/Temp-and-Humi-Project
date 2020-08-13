import React, { Component } from 'react';
import ButtonRegister from "../register/ButtonRegister";
import ButtonShowdata from "../showdata/ButtonShowdata";
import Facebook from "./Facebook";
import FacebookLogin from "react-facebook-login" ;
import './style.css';

let state = {
	isLoggedIn: false,
	userID: "",
	name: "",
	email: "",
picture: ""
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
            <div className="mt-4"><Facebook/></div>
        </div>
      </div>
    );
  }
}

export default App;
