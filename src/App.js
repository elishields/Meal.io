import React, { Component } from 'react';
import GroceryList from '../res/NavGroceryListIcon.svg';
import MyFridge from '../res/NavFridgeIcon.png';
import MealPlan from '../res/NavMealPlanIcon.png';
import Logo from '../res/Logo.png'
import './App.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css'
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css'

class App extends Component {
    render() {
        return (
            <div className="App">

                <div className="Header">
                    <img src={Logo} className="Logo" alt="Meal.io"/>
                </div>
                <div className="Body">

                </div>
                <div className="Nav">
                    <div className="Icon-Group">
                        {/* GroceryList */}
                        <a href=""><img src={GroceryList} className="Nav-Icon" alt="Grocery List"/></a>
                        {/* MyFridge */}
                        <a href=""><img src={MyFridge} className="Nav-Icon" alt="My Fridge"/></a>
                        {/* MealPlan */}
                        <a href=""><img src={MealPlan} className="Nav-Icon" alt="Meal Plan"/></a>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
