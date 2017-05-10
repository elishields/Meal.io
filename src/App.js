//Import classes from React
import React, { Component } from 'react';

//Import classes for our pages

import GroceryList from './GroceryList.js';
import Fridge from './Fridge.js';

//Import our resources
import GroceryListIcon from '../res/NavGroceryListIcon.svg';
import MyFridgeIcon from '../res/FridgeIcon.png';
import MealPlanIcon from '../res/NavMealPlanIcon.png';
import AffiliatedPage from './affiliated-page';
import Logo from '../res/Logo-str.png';

import { Header } from './Navigation.js';
import { Navbar } from './Navigation.js';

//Import our styles
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';



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
          <Header />
          {/* Adds a GroceryList to the template*/}
          <GroceryList />
          {/* Adds a MealioNavbar to the template*/}
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;
