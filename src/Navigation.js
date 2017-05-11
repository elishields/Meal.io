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
                <div className="container-fluid" id="container-fluid">
                    <nav className="navbar navbar-fixed-top" id="header">
                        <div >
                            <a href="" className="navbar-brand">
                                <img className="logo" src={Logo} alt="Meal.io"/>
                            </a>
                            <a href="">
                                <span className="glyphicon glyphicon-menu-hamburger navbar-brand pull-right" id="menu-icon"></span>
                            </a>
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