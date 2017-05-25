//Import classes from React
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import * as firebase from "firebase";
import AlertContainer from 'react-alert'

//Import our resources
import Logo from '../res/Logo-str.png';
import NavIconList from '../res/Nav-Icons/list.svg';
import NavIconFridge from '../res/Nav-Icons/fridge.svg';
import NavIconPlate from '../res/Nav-Icons/plate.svg';
import EasterEgg1 from '../res/easter-egg/easter-egg-1.png';
import EasterEgg2 from '../res/easter-egg/easter-egg-2.png';
import EasterEgg3 from '../res/easter-egg/easter-egg-3.png';
import EasterHeaderLogo from '../res/easter-egg/easter-header-logo.png';
import EasterHeaderLogo2 from '../res/easter-egg/easter-header-logo-2.png';

const LogoutButton = withRouter(({ history }) => (
      <button id="logout-button" onClick={() => {
        history.push('/');
        firebase.auth().signOut();
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
                            <div className="navbar-brand">
                                <img className="logo" src={Logo} alt="Meal.io"/>
                            </div>
                            <ButtonGroup className="pull-right" id="menu-icon">
                                <DropdownButton title="" className="glyphicon glyphicon-menu-hamburger" pullRight noCaret id="bg-nested-dropdown">
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
 *  Tips: Timed pop up notification that gives users helpful food saving tips.
 */

export class Tips extends Component {
    alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'light',
        time: 10000,
        transition: 'fade'
    }

    /*
     *  Array of food saving tips that are randomly chosen.
     */
    showAlert = () => {
        let foodTips = ['Shop smart and realistically',
            'When cooking, don\'t over-serve food',
            'Save – and actually eat – leftovers',
            'Store food in the right places',
            'Avoid clutter in your fridge, pantry and freezer',
            'Treat expiration and sell-by dates as guidelines',
            'Donate to food banks and farms',
            'When unpacking groceries, move older products to the front',
            'Save leftovers and pack them for lunch',
            'Store chips/cereal/crackers in airtight containers',
            'Donate food that you won’t use',
            'Preserve fruits and veggies by canning or pickling',
            'Educate other people on the issue with food waste!',
            'Store food according to the instructions on pack',
            'Sugaring is a great way to preserve fruits like apples, apricots and plums',
            'Plan your meals for the week to only buy what you need',
            'Wait to wash berries until you want to eat them to prevent mold',
            'Plan an "eat the leftovers" night each week'];
        let foodTip = foodTips[Math.floor(Math.random()*foodTips.length)];

        this.msg.show(foodTip, {
            time: 5000,
            type: 'success',
            icon: null
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.showAlert(), 15000);
    }

    /*
     *  render() defines the HTML template for this class.
     */
    render () {
        return (
            <div>
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
            </div>
        )
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
                            <div className="pull-left" id="easter-nav-icon">
                                <img className="logo" src={EasterHeaderLogo} alt="Meal.io"/>
                            </div>
                            <div className="pull-right" id="easter-nav-icon">
                                <img className="logo" src={EasterHeaderLogo2} alt="Meal.io"/>
                            </div>
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
            <div className="container-fluid" id="hide-footer">
                <div className="row">
                    <div className="col-xs-12">
                        <nav className="navbar navbar-fixed-bottom" id="footer">
                            <div className="nav-icon-group">
                                <div className="col-xs-4">
                                    <Link to="/list">
                                        <span>
                                            <img src={NavIconList} className="nav-icon" id="nav-icon-list" alt="Grocery List"/>
                                            <p className="footer-link">Grocery List</p>
                                        </span>
                                    </Link>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="/fridge">
                                        <span>
                                            <img src={NavIconFridge} className="nav-icon" id="nav-icon-fridge" alt="My Fridge"/>
                                            <p className="footer-link">My Fridge</p>
                                        </span>
                                    </Link>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="/meal-plan">
                                        <span>
                                            <img src={NavIconPlate} className="nav-icon" id="nav-icon-plate" alt="Meal Plan"/>
                                            <p className="footer-link">Meal Plan</p>
                                        </span>
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
                                        <img src={EasterEgg1} className="easter-footer-icon" id="nav-icon-list" alt="My Fridge"/>
                                        <br/>
                                </div>
                                <div className="col-xs-4">
                                        <img src={EasterEgg2} className="easter-footer-icon" id="nav-icon-fridge" alt="My Fridge"/>
                                </div>
                                <div className="col-xs-4">
                                        <img src={EasterEgg3} className="easter-footer-icon" id="nav-icon-plate" alt="My Fridge"/>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        );
    }
}