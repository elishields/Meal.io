//Import classes from React
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import * as firebase from "firebase";

//Import our resources
import Logo from '../res/Logo-str.png';
import NavIconList from '../res/Nav-Icons/list.svg';
import NavIconFridge from '../res/Nav-Icons/fridge.svg';
import NavIconPlate from '../res/Nav-Icons/plate.svg';
import EasterEgg1 from '../res/easter-egg/easter-egg-1.png';
import EasterEgg2 from '../res/easter-egg/easter-egg-2.png';
import EasterEgg3 from '../res/easter-egg/easter-egg-3.png';
import EasterHeaderLogo from '../res/easter-egg/easter-header-logo.png';

const logoutButton = withRouter(({ history }) => (
    <span>Hi</span>
));



const LogoutButton = withRouter(({ history }) => (
      <button id="logout-button" onClick={() => {
        firebase.auth().signOut();
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (!firebaseUser) {
                history.push('/');
            }
        });
      }}>Sign out</button>
))


/*
 *  Header: defines the header common to all pages
 */
export class Header extends Component {
    //called when logout button is pressed to log user out
    logout = function(){
        firebase.auth().signOut();
    }

    /*
     *  render() defines the HTML template for this class.
     */
    render() {
        return (
            <div className="container-fluid">
                <row>
                    <nav className="navbar navbar-fixed-top" id="header">
                        <div>
                            <a href="" className="navbar-brand">
                                <img className="logo" src={Logo} alt="Meal.io"/>
                            </a>
                            <ButtonGroup className="pull-right" id="menu-icon">
                                <DropdownButton className="glyphicon glyphicon-menu-hamburger" pullRight noCaret id="bg-nested-dropdown">
                                    <MenuItem className="menu-item" eventKey="1">
                                        <Link to="/affiliated-page">Affiliated Apps</Link>
                                    </MenuItem>
                                    <MenuItem className="menu-item" eventKey="2">
                                        <Link to="/about-us">About Us</Link>
                                    </MenuItem>
                                    <MenuItem divider/>
                                    <MenuItem className="menu-item" eventKey="3"><LogoutButton /></MenuItem>
                                </DropdownButton>
                            </ButtonGroup>
                        </div>
                    </nav>
                </row>
            </div>

        );
    }
}

export class EasterHeader extends Component {
    //called when logout button is pressed to log user out
    logout = function(){
        firebase.auth().signOut();
    }

    /*
     *  render() defines the HTML template for this class.
     */
    render() {
        return (
            <div className="container-fluid">
                <row>
                    <nav className="navbar navbar-fixed-top" id="easter-header">
                        <div>
                            <a href="" className="navbar-brand">
                                <img className="logo" src={EasterHeaderLogo} alt="Meal.io"/>
                            </a>
                            <ButtonGroup className="pull-right" id="menu-icon">
                                <DropdownButton className="glyphicon glyphicon-menu-hamburger" pullRight noCaret
                                                id="easter-bg-nested-dropdown">

                                    <MenuItem className="menu-item" eventKey="1">
                                        <Link to="/affiliated-page">Affiliated Apps</Link>
                                    </MenuItem>
                                    <MenuItem className="menu-item" eventKey="2">
                                        <Link to="/about-us">About Us</Link>
                                    </MenuItem>
                                    <MenuItem divider/>
                                    <MenuItem className="menu-item" eventKey="3"><LogoutButton /></MenuItem>

                                </DropdownButton>
                            </ButtonGroup>
                        </div>
                    </nav>
                </row>
            </div>

        );
    }
}
/*
 *  Footer: defines the navbar common to all pages.
 */
export class Footer extends React.Component {

    /*
     *  render() defines the HTML template for this class.
     */
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <nav className="navbar navbar-fixed-bottom" id="footer">
                            <div className="nav-icon-group">
                                <div className="col-xs-4">
                                    <Link to="/list">
                                        <img src={NavIconList} className="nav-icon" id="nav-icon-list" alt="My Fridge"/>
                                        <br/>
                                        <p>Grocery</p>
                                    </Link>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="/fridge">
                                        <img src={NavIconFridge} className="nav-icon" id="nav-icon-fridge" alt="My Fridge"/>
                                        <p>My Fridge</p>
                                    </Link>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="/">
                                        <img src={NavIconPlate} className="nav-icon" id="nav-icon-plate" alt="My Fridge"/>
                                        <p>Meal Plan</p>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        );
    }
}

export class EasterFooter extends React.Component {

    /*
     *  render() defines the HTML template for this class.
     */
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <nav className="navbar navbar-fixed-bottom" id="easter-footer">
                            <div className="nav-icon-group">
                                <div className="col-xs-4">
                                    <Link to="/list">
                                        <img src={EasterEgg1} className="nav-icon" id="nav-icon-list" alt="My Fridge"/>
                                        <br/>
                                    </Link>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="/fridge">
                                        <img src={EasterEgg2} className="nav-icon" id="nav-icon-fridge" alt="My Fridge"/>
                                    </Link>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="/">
                                        <img src={EasterEgg3} className="nav-icon" id="nav-icon-plate" alt="My Fridge"/>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        );
    }
}