//Import classes from React
import React, { Component } from 'react';

//Import our resources
import GroceryListIcon from '../res/NavGroceryListIcon.svg';
import MyFridgeIcon from '../res/FridgeIcon.png';
import MealPlanIcon from '../res/NavMealPlanIcon.png';
import Logo from '../res/Logo-str.png';

/*
 *  Header: defines the header common to all pages
 */
export class Header extends React.Component {

	/*
	 *  render() defines the HTML template for this class.
	 */
	render() {
		return (
		    <div className="row">
                <div className="container-fluid">
                    <nav className="navbar header">
                        <div className="container-fluid navbar-header header">
                            <div className="col-md-4 navbar-left">
                                <a href="">
                                    <img src={Logo} alt="Meal.io" className="logo"/>
                                </a>
                            </div>
                                <div className="col-md-1 navbar-right">
                                <a href="">
                                    <span className="glyphicon glyphicon-menu-hamburger" id="menu-icon"></span>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
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
	    	<nav className="navbar navbar-default navbar-fixed-bottom footer">
		        <div className="container-fluid footer icon-group">
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