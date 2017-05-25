// Import classes from React
import React, { Component } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

// Import our classes
import { Header, Footer, Tips } from './Navigation.js';

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
                    {this.props.mealName}
                </h4>
                <Panel collapsible expanded={this.state.open} bsStyle={ null } className="meal-panel">
                    <div className="row">
                        <div className="col-xs-12 meal-category">
                            <p className="meal-category">//TODO:INGREDIENTS</p>
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
    constructor (props) {
        super (props);

        this.buildMeals = this.buildMeals.bind(this);

        this.state = {
            mealObjects: []
        }
    }
    /*
     *  render() returns the HTML template for Fridge
     */

    componentWillMount() {
        this.props.readMeals(this.buildMeals);
    }

    buildMeals = function(){
        var handle = this;
        var key = 0;

        let newMeals = this.state.mealObjects;
        this.props.meals.forEach(function(item) {
            newMeals.push(
                <MealDay
                    key={key}
                    ingredients={item.ingredients}
                    mealName={item.mealName}
                />
            );

            key++;
        });

        this.setState({mealObjects: newMeals});
    }

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

                    <div id="content-section">
                        <div className="row">
                            <div className="col-xs-12 col-md-4 col-md-offset-4" id="meal-day-1">
                                <div className="fridge-category" id="fridge-category-fruit-veg">
                                    {this.state.mealObjects}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="grocery-button-row" id="grocery-button-row">
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
