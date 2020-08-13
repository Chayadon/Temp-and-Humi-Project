import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import ButtonShowdata from "../showdata/ButtonShowdata" ;
import ButtonRegister from "../register/ButtonRegister" ;
import './style.css' ;
import LoginHOC from 'react-facebook-login-hoc'


var key  = 1 ;
export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
      name: "",
      email: "",
      picture: ""

  };
handleReset(){

	console.log("Hello");
	console.log(key);
	localStorage.removeItem('key') ;
	localStorage.setItem('key',key );
	key = Number(localStorage.getItem('key'))-1  ;

	window.location.reload(true);
	window.location.replace('https://test.chayadon.com/');
	}


  responseFacebook = response => {
    console.log(response);
    this.setState({
      isLoggedIn: true ,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
};

  componentClicked = () => console.log("clicked");
//key = Number(localStorage.getItem('key'))  ;

  render() {
    let fbContent;
	if(key == 0){  fbContent = ( <FacebookLogin appId=""  autoLoad={0}/>);  key = 1 ;
	}else if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#F5F5DC",
            padding: "20px"
          }}>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
	<div className = "btn-group btn-group-lg"><ButtonRegister/><ButtonShowdata/></div>
	<button type = "button" className="btn btn-danger" onClick={this.handleReset}>Logout</button>
        </div>
      );
    } else  {
      fbContent = (
        <FacebookLogin
          appId="216252089722355"
          autoLoad={0}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
