// Import classes from React
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// Import style
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import '../src/App.css'

// Import resources
import MealIoLogo from '../res/Logo-str.png';
import Cycle from '../res/cycle-updated-2.png';
import * as firebase from "firebase";

/*
 *  LoginButton: defines the button clicked to sign a user in
 */
class LoginButton extends Component {

    /*
     *  Constructor for LoginButton
     */
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
    }

    /*
     *  handler: function called when login button is clicked
     */
    handler = function() {
        let email = document.getElementById('email').value;
        let passw = document.getElementById('password').value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, passw);
        promise.catch(e => console.log(e.message));
    }

    /*
     *  render() returns the HTML for LoginButton
     */
    render () {
        return (
            <a href="#" className="btn btn-default btn-lg" onClick={this.handler} id="btnLogin">Login</a>
        )
    }
}

/*
 *  SignUpButton: defines the button used to sign up a new user
 */
class SignUpButton extends Component {

    /*
     *  Constructor for SignUpButton
     */
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
    }

    /*
     *  handler: function called when signup button is clicked
     */
    handler = function() {
        let email = document.getElementById('email').value;
        let passw = document.getElementById('password').value;
        const auth = firebase.auth();
        //TODO:check for real emails
        const promise = auth.createUserWithEmailAndPassword(email, passw);
        firebase.database().ref(firebase.auth().currentUser.uid).set({
            email: email,
        });
        promise.catch(e => console.log(e.message));
    }

    /*
     *  render() returns the HTML template for SignUpButton
     */
    render () {
        return (
            <a href="#" className="btn btn-default btn-lg" onClick={this.handler} id="btnSignup">Sign Up</a>
        )
    }
}

class FacebookButton extends Component {
    /*
     *  Constructor for FBButton
     */
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
    }

    /*
     *  handler: function called when FB button is clicked
     */
    handler = function() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider);
        firebase.auth().getRedirectResult().then(function(result) {
            if (result.credential) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // ...
            }
            // The signed-in user info.
            var user = result.user;
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    /*
     *  render() returns the HTML template for FBButton
     */
    render () {
        return (
            <a href="#" className="btn btn-default btn-lg" onClick={this.handler} id="btnFacebook">Sign In With Facebook</a>
        )
    }
}

const config ={
    apiKey: "AIzaSyAjPS62DlOOIhne2zZyU59mdIV-LrFLxjw",
    authDomain: "mealio-d047c.firebaseapp.com",
    databaseURL: "https://mealio-d047c.firebaseio.com",
    projectId: "mealio-d047c",
    storageBucket: "mealio-d047c.appspot.com",
    messagingSenderId: "280670219948"
};

/*
 *  LandingPage: defines the landing page used for login, signup, and welcome
 */
export class LandingPage extends Component {

    /*
     *  Constructor for LandingPage
     */
    constructor(props) {
        super(props);

        //initialize firebase
 
        if (!firebase.apps.length) firebase.initializeApp(config);

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

    /*
     *  render() returns the HTML template for LandingPage
     */
    render() {

        return (
            <div>
                <div className="container-fluid" id="landing-body">

                    <div className="row">
                        <div className="col-xs-8 col-xs-offset-2" id="landing-logo">
                            <img src={MealIoLogo} className="img-responsive center-block" alt="Meal.io logo"></img>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-8 col-xs-offset-2">
                            <h3 id="landing-welcome">Manage Your Meals!</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-8 col-xs-offset-2">
                            <img src={Cycle} className="center-block" id="landing-image" alt="Meal.io feature cycle"></img>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-8 col-xs-offset-2" id="landing-inputs">
                            <input type="email" className="form-control input-md landing-input" id="email" placeholder="Email" />
                            <input type="password" className="form-control input-md landing-input" id="password" placeholder="Password" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-6 col-xs-offset-3">
                            <div className="btn-group btn-group-justified" id="landing-buttons-group">
                                <span className="group-btn">
                                    <LoginButton/>
                                </span>
                                <br/>
                                <span className="group-btn">
                                    <SignUpButton/>
                                </span> <br/>
                                <FacebookButton/>
                            </div>
                        </div>
                    </div>

                </div>
                <Link to="/list"><div id="DoNotTouch"></div></Link>
            </div>
        )
    }
}


export default LandingPage;
