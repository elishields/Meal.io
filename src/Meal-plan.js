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

                    {/*<div className="row">
                        <div className="col-md-4 col-md-offset-4 col-xs-8 col-xs-offset-2">
                            <img src={MealPlate} className="center-block" id="meal-plan-plate" alt="Meal Plan"/>
                        </div>
                    </div>*/}

                    <div className="row">
                        <div className="col-xs-8 col-xs-offset-1">
                            <div aria-label="Page navigation">
                                <ul className="pagination-lg">
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">6</a></li>
                                    <li><a href="#">7</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4" id="meal-list">
                            <div className="fridge-category" id="fridge-category-fruit-veg">
                                <h4 className="fridge-category-title">Day 1</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4 meal-category">
                            <p className="meal-category">Breakfast:</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4 meal-category">
                            <p className="meal-category">Lunch:</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4 meal-category">
                            <p className="meal-category">Dinner:</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4" id="meal-list">
                            <div className="fridge-category" id="fridge-category-fruit-veg">
                                <h4 className="fridge-category-title">Day 2</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4 meal-category">
                            <p className="meal-category">Breakfast:</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4 meal-category">
                            <p className="meal-category">Lunch:</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4 meal-category">
                            <p className="meal-category">Dinner:</p>
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
