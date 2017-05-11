import React, { Component } from 'react';
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './landing-page.css';
import MealIoLogo from '../res/Logo-str.png';
import Cycle from '../res/cycle-landing.png';



export class LandingPage extends Component {

    render() {

        return (
            <div className="container-fluid" id="body-landing">
                <div className="row">
                    <div className="col-xs-12 logo-landing">
                        <img src={MealIoLogo} alt="Meal.io logo" className="img-responsive center-block"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 wrapper">
                        <h3>Welcome Food Waste Hater!</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <div className="form-landing">
                            <h4>Please login or sign up below:</h4>
                            <input type="text" id="email" className="form-control input-md" placeholder="Email" />
                            <br></br>
                            <input type="password" id="password" className="form-control input-md" placeholder="Password" />
                            <br/>
                            <div className="wrapper">
                                 <span className="group-btn">
                                     <a href="#" className="btn btn-default btn-lg" id="btnLogin">Login</a>
                                 </span>
                                <span className="group-btn">
                                    <a href="#" className="btn btn-default btn-lg" id="btnSignUp">Signup</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 img-landing">
                        <img src={Cycle} alt="Meal.io feature cycle" className="img-responsive center-block"></img>
                    </div>
                </div>
            </div>)
    }
}


export default LandingPage;
