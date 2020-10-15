import React, {Component} from "react";
import axios from "axios";
import {ip,port} from "../setIP/setting";
//import Facebook from "./Facebook" ;
//import FacebookLogin from "reat-facebook-login" ;
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
let state = {
	id: 1,
};
//localStorage.setItem('key', state.id);
var ID = Number(localStorage.getItem('Size')) ;
export default class Register extends Component{
    constructor() {
        super();
        this.state = {
            idkey: ID,
            firstname:"",
            lastname:""
        }
        this.handleChang = this.handleChang.bind(this);
        this.handleClicked = this.handleClicked.bind(this);
    }
    handleChang = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleClicked(){
        let url = 'https://####/data';
        let data = {
            idkey:this.state.idkey,
            firstname:this.state.firstname,
            lastname:this.state.lastname
        }
        axios.post(url,data)
        this.setState({
            idkey: ID = ID + 1  ,
            firstname:"",
            lastname:""
        });
	console.log('Hello');
	localStorage.removeItem('Size') ;
	localStorage.setItem('Size', ID);
	ID = 0 ;
	ID = Number(localStorage.getItem('Size'))  ;
	console.log('Hello,,,');
    }
    render() {
        return(
       
            <div>
                <div className="App">
                    <h2>Register</h2>
                    <hr/>
                </div>
                <form className="container">
		    <div className="form-group">
                        <label htmlFor="id">ID :</label>
                        <input type="text "  className="form-control" size="10" id="idkey" onChange={this.handleChang} value={this.state.idkey}/>
                    </div>
                    <div className="form-group">
                        <label>Firstname :</label>
                        <input type="text" className="form-control" id="firstname" onChange={this.handleChang} value={this.state.firstname}/>
                    </div>
                    <div className="form-group">
                        <label>Lastname :</label>
                        <input type="text" className="form-control" id="lastname" onChange={this.handleChang} value={this.state.lastname}/>
                    </div>
	          <Link to = {"Showdata"}> <button type="submit" className="btn btn-primary"  onClick={this.handleClicked} value > Submit </button></Link>
		</form>
            </div>
        );
    }
}
