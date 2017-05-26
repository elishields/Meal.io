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
import '../src/bootstrap-3.3.7-dist/fonts/glyphicons-halflings-regular.svg';
import './App.css';

class MealIngredient extends Component {
    render() {
        return(
            <div>
                <span>{this.props.itemQuan} x {this.props.itemName}</span>
            </div>
        );
    }
}

class MealDay extends React.Component {
    constructor(props) {
        super(props);

        let ingredientRows = [];
        Object.keys(props.ingredients).forEach(function(item) {
            ingredientRows.push(
                <MealIngredient
                    itemName={item}
                    itemQuan={props.ingredients[item]}
                />
            );
        });

        this.state = {
            open: false,
            rows: ingredientRows
        };
    }

    render() {
        return (
            <div>
                <div id="meal-plan-meal-name" onClick={ ()=> this.setState({ open: !this.state.open })}>
                    <h4 className="meal-category-title pull-left">
                        {this.props.mealName}
                    </h4>
                    <span className="glyphicon glyphicon-menu-down pull-right" id="meal-plan-chevron" aria-hidden="true"></span>
                </div>
                <Panel collapsible expanded={this.state.open} bsStyle={ null } className="meal-panel">
                    <div className="row">
                        <div className="col-xs-12 meal-category">
                            {this.state.rows}
                        </div>
                        <br/>
                        <button onClick={() => this.props.deleteMeal("myMeal")}>DelEAT Meal</button>
                    </div>
                </Panel>
            </div>
        );
    }
}


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

        let newMeals = [];
        this.props.meals.forEach(function(item) {
            newMeals.push(
                <MealDay
                    key={key}
                    ingredients={item.ingredients}
                    mealName={item.mealName}
                    deleteMeal={handle.props.deleteMeal}
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
                
                <Footer />
            </div>
        )
    }
}

export default MealPlan;
