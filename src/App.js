import React, { Component } from 'react';
import GroceryListIcon from '../res/NavGroceryListIcon.svg';
import MyFridgeIcon from '../res/FridgeIcon.png';
import MealPlanIcon from '../res/NavMealPlanIcon.png';
import Logo from '../res/Logo.png';
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="container-fluid">

                <nav className="navbar header-footer">
                    <div className="container-fluid navbar-header header-footer">
                        <a className="navbar-brand" href="">
                            <img src={Logo} alt="Meal.io" className="logo"/>
                        </a>
                    </div>
                </nav>

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

                </div>

            </div> // .app
        );
    }
}

export default App;
