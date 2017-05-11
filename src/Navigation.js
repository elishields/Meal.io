//Import classes from React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

//Import our resources
import GroceryListIcon from '../res/NavGroceryListIcon.svg';
import MyFridgeIcon from '../res/FridgeIcon.png';
import MealPlanIcon from '../res/NavMealPlanIcon.png';
import Logo from '../res/Logo-str.png';

/*
 *  Header: defines the header common to all pages
 */
export class Header extends Component {

	/*
	 *  render() defines the HTML template for this class.
	 */
	render() {
		return (
		    <div className="row">
                <div className="container-fluid" id="container-fluid">
                    <nav className="navbar navbar-fixed-top" id="header">
                        <div >
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
                                    <MenuItem className="menu-item" eventKey="3">Log Out</MenuItem>
                                </DropdownButton>
                            </ButtonGroup>
                        </div>
                    </nav>
                </div>
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
	    	<nav className="navbar navbar-default navbar-fixed-bottom footer">
		        <div className="container-fluid footer icon-group">
		            <Link to="/">
		                <img src={GroceryListIcon} className="nav-icon" alt="Grocery List"/>
		            </Link>
		            <Link to="/fridge">
		                <img src={MyFridgeIcon} className="nav-icon" alt="My Fridge"/>
		            </Link>
		            <Link to="/">
		                <img src={MealPlanIcon} className="nav-icon" alt="Meal Plan"/>
		            </Link>
		        </div>
		    </nav>
		);
	}
}