// Import classes from React
import React, { Component } from 'react';

// Import our classes
import { Header, Footer } from './Navigation.js';

//Import our resources
import MealPlate from '../res/dinner.png'

// Import styles
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';

/*
 * Fridge: displays food categories within the fridge.
 */
export class MealPlan extends Component {

    /*
     *  render() returns the HTML template for Fridge
     */
    render() {
        return (
            <div>
                <Header />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3 className="page-header" id="header-all">
                                <span className="page-title-text">MEAL PLAN</span>
                            </h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-md-offset-4 col-xs-8 col-xs-offset-2">
                            <img src={MealPlate} className="center-block" id="meal-plan-plate" alt="Meal Plan"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4" id="fridge-list">
                            <div className="fridge-category" id="fridge-category-fruit-veg">
                                <h4 className="fridge-category-title">Fruits & Vegetables</h4>
                                <p className="fridge-category-content">Apple</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="grocery-button-row">
                                <button className="col-xs-4 btn btn-secondary" id="remove-button" onClick={this.deleteItems}>CLEAR</button>
                                <button className="col-xs-4 btn btn-secondary" id="add-to-fridge-button" >SEE ALL MEALS</button>
                                <button className="col-xs-4 btn btn-secondary" id="add-to-fridge-button" >SAVE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default MealPlan;
