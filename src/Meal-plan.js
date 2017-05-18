// Import classes from React
import React, { Component } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

// Import our classes
import { Header, Footer } from './Navigation.js';

//Import our resources


// Import styles
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';

class MealDay extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div>
                <h4 className="meal-category-title" onClick={ ()=> this.setState({ open: !this.state.open })}>
                    Day {this.props.dayNum}
                </h4>
                <Panel collapsible expanded={this.state.open} bsStyle={ null } className="meal-panel">
                    <div className="row">
                        <div className="col-xs-12 meal-category">
                            <p className="meal-category">Breakfast:</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 meal-category">
                            <p className="meal-category">Lunch:</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 meal-category">
                            <p className="meal-category">Dinner:</p>
                        </div>
                    </div>
                </Panel>
            </div>
        );
    }
}


/*
 * MealPlan: displays 7 days worth of meals planned, 3 for each day.
 */
export class MealPlan extends Component {

    /*
     *  render() returns the HTML template for Fridge
     */
    render() {
        return (
            <div>
                <Header />
                <Tips />
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
                    </div>

                    <div className="row">
                        <div className="col-xs-8 col-xs-offset-2">
                            <ButtonToolbar>
                                <ButtonGroup className="meal-nav">
                                    <Button><a href="#meal-day-1">1</a></Button>
                                    <Button><a href="#meal-day-2">2</a></Button>
                                    <Button><a href="#meal-day-3">3</a></Button>
                                    <Button><a href="#meal-day-4">4</a></Button>
                                    <Button><a href="#meal-day-5">5</a></Button>
                                    <Button><a href="#meal-day-6">6</a></Button>
                                    <Button><a href="#meal-day-7">7</a></Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4" id="meal-day-1">
                            <div className="fridge-category" id="fridge-category-fruit-veg">
                                <MealDay dayNum={1} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4" id="meal-day-1">
                            <div className="fridge-category" id="fridge-category-fruit-veg">
                                <MealDay dayNum={2} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4" id="meal-day-1">
                            <div className="fridge-category" id="fridge-category-fruit-veg">
                                <MealDay dayNum={3} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4" id="meal-day-1">
                            <div className="fridge-category" id="fridge-category-fruit-veg">
                                <MealDay dayNum={4} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4" id="meal-day-1">
                            <div className="fridge-category" id="fridge-category-fruit-veg">
                                <MealDay dayNum={5} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4" id="meal-day-1">
                            <div className="fridge-category" id="fridge-category-fruit-veg">
                                <MealDay dayNum={6} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-4 col-md-offset-4" id="meal-day-1">
                            <div className="fridge-category" id="fridge-category-fruit-veg">
                                <MealDay dayNum={7} />
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
