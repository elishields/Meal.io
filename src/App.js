//Import classes from React
import React, { Component } from 'react';

//Import classes for our pages
import GroceryList from './GroceryList.js';
import Fridge from './Fridge.js';

//Import our resources
import GroceryListIcon from '../res/NavGroceryListIcon.svg';
import MyFridgeIcon from '../res/FridgeIcon.png';
import MealPlanIcon from '../res/NavMealPlanIcon.png';
import Logo from '../res/Logo-str.png';

//Import our styles
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';


/*
 *  MealioHeader: defines the header common to all pages
 */
class MealioHeader extends React.Component {

	/*
	 *  render() defines the HTML template for this class.
	 */
	render() {
		return (
      <nav className="navbar header-footer">
        <div className="container-fluid navbar-header header-footer">
            <ul className="navbar-left">
                <a href="" className="navbar-brand">
                    <img src={Logo} alt="Meal.io" className="logo"/>
                </a>
            </ul>
            <ul className="navbar-right">
                <a href="">
                    <span className="glyphicon glyphicon-menu-hamburger" id="menu-icon"></span>
                </a>
            </ul>
        </div>
    </nav>
		);
	}
}

/*
 *  MealioNavbar: defines the navbar common to all pages.
 */
class MealioNavbar extends React.Component {

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

/*
 * App: this is the 'entry point' for our app. It is loaded in index.js
 */
class App extends Component {

  /*
   *  render() defines the HTML template for this class.
   */
  render() {
    return (
      <div className="app">
        <div className="container-fluid">

          {/* Adds a MealioHeader to the template*/}
          <MealioHeader />

          {/* Adds a GroceryList to the template*/}
          <Fridge />

          {/* Adds a MealioNavbar to the template*/}
          <MealioNavbar />
        </div>
      </div>
    );
  }
}

export default App;
