//Import classes from React
import React, { Component } from 'react';

//Import our resources
import GroceryListIcon from '../res/NavGroceryListIcon.svg';
import MyFridgeIcon from '../res/FridgeIcon.png';
import MealPlanIcon from '../res/NavMealPlanIcon.png';
import Logo from '../res/Logo.png';

/*
 *  Header: defines the header common to all pages
 */
export class Header extends React.Component {

	/*
	 *  render() defines the HTML template for this class.
	 */
	render() {
		return (
	    	<nav className="navbar header-footer">
		        <div className="container-fluid navbar-header header-footer">
		            <a href="" className="navbar-brand navbar-left">
		                <img src={Logo} alt="Meal.io" className="logo"/>
		            </a>
		            <a href="" className="navbar-right">
		                <span className="glyphicon glyphicon-menu-hamburger"></span>
		            </a>
		        </div>
		    </nav>
		);
	}
}

/*
 *  Navbar: defines the navbar common to all pages.
 */
export class Navbar extends React.Component {

	/*
	 *  render() defines the HTML template for this class.
	 */
	render() {
		return (
	    	<nav className="navbar navbar-default navbar-fixed-bottom header-footer">
		        <div className="container-fluid header-footer icon-group">
		            <a href="">
		                <img src={GroceryListIcon} className="nav-icon" alt="Grocery List"/>
		            </a>
		            <a href="">
		                <img src={MyFridgeIcon} className="nav-icon" alt="My Fridge"/>
		            </a>
		            <a href="">
		                <img src={MealPlanIcon} className="nav-icon" alt="Meal Plan"/>
		            </a>
		        </div>
		    </nav>
		);
	}
}