// src/routes.js
import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from "./App";
import Register from "./register/Register";
import Showdata from "./showdata/Showdata";
import Temp	from "./temp/index.js" ;
export default class Routes extends Component{
    render() {
        return(
            <BrowserRouter>
                <Route path="/" component={App} />
                <Route path='/register' component={Register}/>
                <Route path='/showdata' component={Showdata}/>
		<Route path='/temp'	component={Temp}/>
            </BrowserRouter>
        );
    }
};

