import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonTemp extends Component {
    render() {
        return (
            <div className="container">
                <Link to={'./Temp'}> <button type="button" className="btn btn-warning" >Temp</button> </Link>
          </div>

        );
    }
}
export default ButtonTemp;

