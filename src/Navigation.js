//Import classes from React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import * as firebase from "firebase";

//Import our resources
import GroceryListIcon from '../res/NavGroceryListIcon.svg';
import MyFridgeIcon from '../res/FridgeIcon.png';
import MealPlanIcon from '../res/NavMealPlanIcon.png';
import Logo from '../res/Logo-str.png';
import NavIconList from '../res/Nav-Icons/list.svg';
import NavIconFridge from '../res/Nav-Icons/fridge.svg';
import NavIconPlate from '../res/Nav-Icons/plate.svg'

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
            <div className="container-fluid" id="container-fluid">
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
                                        <Link to="/about-page">About Us</Link>
                                    </MenuItem>
                                    <MenuItem divider/>
                                    <MenuItem className="menu-item" eventKey="3" onClick={this.logout}>Log Out</MenuItem>
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
            <div className="container-fluid" id="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <nav className="navbar navbar-fixed-bottom" id="footer">
                            <div className="nav-icon-group">
                                <div className="col-xs-4">
                                    <Link to="/list">
                                        {/*<img src={GroceryListIcon} className="nav-icon" alt="Grocery List"/>*/}
                                        {/*<i className="fa fa-list-ul nav-icon" id="nav-icon-grocery" aria-hidden="true"></i>*/}
                                        <img src={NavIconList} className="nav-icon" id="nav-icon-list" alt="My Fridge"/>
                                        <br/>
                                        <p className="nav-icon-caption">Grocery List</p>
                                    </Link>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="/fridge">
                                        {/*<img src={MyFridgeIcon} className="nav-icon" id="nav-icon-fridge" alt="My Fridge"/>*/}
                                        <img src={NavIconFridge} className="nav-icon" id="nav-icon-fridge" alt="My Fridge"/>
                                        <p className="nav-icon-caption">My Fridge</p>
                                    </Link>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="/">
                                        {/*<img src={MealPlanIcon} className="nav-icon" id="nav-icon-plan" alt="Meal Plan"/>*/}
                                        <img src={NavIconPlate} className="nav-icon" id="nav-icon-plate" alt="My Fridge"/>
                                        <p className="nav-icon-caption">Meal Plan</p>
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