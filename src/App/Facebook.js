import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import ButtonShowdata from "../showdata/ButtonShowdata" ;
import ButtonRegister from "../register/ButtonRegister" ;
import './style.css' ;

//localStorage.setItem('key', 0);
export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  handleReset(){
	localStorage.setItem('key', 0);
	console.log("Hello");
	window.location.reload(true);
	window.location.href = 'https://test.chayadon.com/';
	}

  responseFacebook = response => {
    console.log(response);
//  localStorage.setItem('key', 1);
    this.setState({
      isLoggedIn: Number(localStorage.getItem('key')),
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
};

  componentClicked = ( ) => localStorage.setItem('key',1);


  render() {
	let fbContent ;
	if(this.state.isLoggedIn) {
	fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#FF69B4",
            padding: "20px",
//	    position: 'absolute',
            zIndex: 99,
            backgroundImage: 'linear-gradient(45deg, rgba(218, 132, 230, 0.84) 0%, rgba(179, 0, 89, 1) 83%)'
          }}>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
	<div className = "btn-group btn-group-lg"><ButtonRegister/><ButtonShowdata/></div>
	<button type = "button" className="btn btn-danger" onClick={this.handleReset}>Logout</button>
        </div>
      );

    } else {
      fbContent = (
        <FacebookLogin
          appId="216252089722355"
          autoLoad={Number( localStorage.getItem('key') )   }
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

