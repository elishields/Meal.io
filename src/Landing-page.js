// Import classes from React
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// Import our classes
import { Header, Footer } from './Navigation.js';

// Import style
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import '../src/App.css'

// Import resources
import MealIoLogo from '../res/Logo-str.png';
import Cycle from '../res/cycle-landing.png';
import * as firebase from "firebase";


class LoginButton extends Component {

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
    }

    //called when login button is clicked
    handler = function() {
        let email = document.getElementById('email').value;
        let passw = document.getElementById('password').value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, passw);
        promise.catch(e => console.log(e.message));
    }

    //creates the html for the button
    render () {
        return (
            <a href="#" className="btn btn-default btn-lg" onClick={this.handler} id="btnLogin">Login</a>
        )
    }
}

class SignUpButton extends Component {

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
    }

    //called when signup button is clicked
    handler = function() {
        let email = document.getElementById('email').value;
        let passw = document.getElementById('password').value;
        const auth = firebase.auth();
        //TODO:check for real emails
        const promise = auth.createUserWithEmailAndPassword(email, passw);
        firebase.database().ref(firebase.auth().currentUser.uid).set({
            email: email,
        })
        promise.catch(e => console.log(e.message));
    }

    //creates the html for the button
    render () {
        return (
            <a href="#" className="btn btn-default btn-lg" onClick={this.handler} id="btnSignup">SignUp</a>
        )
    }
}


export class LandingPage extends Component {

    constructor(props) {
        super(props);

        //initialize firebase for the app
        const config ={
            apiKey: "AIzaSyAjPS62DlOOIhne2zZyU59mdIV-LrFLxjw",
            authDomain: "mealio-d047c.firebaseapp.com",
            databaseURL: "https://mealio-d047c.firebaseio.com",
            projectId: "mealio-d047c",
            storageBucket: "mealio-d047c.appspot.com",
            messagingSenderId: "280670219948"
        };
        firebase.initializeApp(config);

        //realtime 'signed in' listener (redirects to grocery list once auth)
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                console.log('User ' + firebaseUser.email + ' is logged in');
                //checks if user exists in database
                let ref = new firebase.database().ref("/" + firebaseUser.uid);
                ref.once("value", function(snapshot){
                    //if the user does NOT exist in the database, they are added
                    if (!snapshot.exists()) {
                        firebase.database().ref(firebase.auth().currentUser.uid).set({
                            email: firebase.auth().currentUser.email,
                        })
                    }
                });
                //send the user to the grocery list on auth
                document.getElementById("DoNotTouch").click();
            } else {
                console.log('User is not logged in');
            }
        });
    }

    render() {

        return (
            <div>
            <div className="container-fluid" id="container-fluid landing-body">

                <div className="row">
                    <div className="col-xs-12" id="landing-logo">
                        <img src={MealIoLogo} alt="Meal.io logo" className="img-responsive center-block"></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12" id="container-fluid">
                        <h3 id="landing-welcome">Welcome Food Waste Hater!</h3>
                        <h4 id="landing-prompt">Please login or sign up below:</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12" id="landing-form">

                        <div id="landing-inputs">
                            <input type="email" className="form-control input-md" id="email" placeholder="Email" />
                            <br/>
                            <input type="password" className="form-control input-md" id="password" placeholder="Password" />
                        </div>
                        <div id="landing-buttons-row">
                            <div id="landing-buttons-group">
                                <span className="group-btn">
                                    <LoginButton/>
                                </span>
                                <span className="group-btn">
                                    <SignUpButton/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12" id="container-fluid">
                        <div id="landing-image">
                            <img src={Cycle} className="center-block" id="landing-image-responsive" alt="Meal.io feature cycle"></img>
                        </div>
                    </div>
                </div>

            </div>
                <Link to="/list"><div id="DoNotTouch"> </div></Link>
            </div>
        )
    }
}


export default LandingPage;
