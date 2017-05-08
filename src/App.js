import React, { Component } from 'react';
import GroceryListIcon from '../res/NavGroceryListIcon.svg';
import MyFridge from '../res/FridgeIcon.png';
import MealPlan from '../res/NavMealPlanIcon.png';
import Logo from '../res/Logo.png'
import './App.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css'
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css'

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="container-fluid">

                <div className="navbar navbar-default navbar-fixed-top" id="header">
                    <img src={Logo} className="logo" alt="Meal.io"/>
                </div>

                <div className="navbar navbar-default navbar-fixed-bottom">
                    <div className="icon-group">
                        {/* GroceryList */}
                        <a href=""><img src={GroceryListIcon} className="nav-icon" alt="Grocery List"/></a>
                        {/* MyFridge */}
                        <a href=""><img src={MyFridge} className="nav-icon" alt="My Fridge"/></a>
                        {/* MealPlan */}
                        <a href=""><img src={MealPlan} className="nav-icon" alt="Meal Plan"/></a>
                    </div>
                </div>

                </div>
            </div>
        );
    }
}

export default App;
