import React, { Component } from 'react';
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import GroceryListIcon from '../res/grocery-list-about-us.svg';
import MyFridgeIcon from '../res/fridge-about-us.svg';
import MealPlanningIcon from '../res/plate-about-us.svg';
import TeamPicture from '../res/fruit-veg-icon.png';
import { Header } from './Navigation.js';
import { Footer } from './Navigation.js';
import './App.css';


export class AboutusPage extends Component {

    render() {

        return (
            <div>
                <Header/>
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-xm-12 col-lg-6 col-md-offset-3">

                            <h3 className="page-header" id="header-all">
                                <span className="page-title-text">ABOUT US</span>
                            </h3>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xm-12 col-lg-6 col-md-offset-3" id="first-paragraph">
                            <p>
                                Meal.io helps manage perishable food in order to reduce food waste.
                                Users can create a grocery list, add the food purchased to the fridge
                                and finally create meal plans.
                            </p>
                        </div>
                    </div>

                    <br></br>

                    <div className="row">

                        <div className="col-xs-3 col-xs-offset-1 col-lg-2 col-md-offset-3">
                            <img src={GroceryListIcon} alt="Grocery List Logo"></img>
                        </div>

                        <div className="col-xs-8 col-lg-4">Create your shopping list before you go shopping and
                            check off the items as you buy them. Bought items are added to the Fridge.</div>

                    </div>

                    <br></br>

                    <div className="row">

                        <div className="col-xs-3 col-xs-offset-1 col-lg-2 col-md-offset-3">
                            <img src={MyFridgeIcon} alt="Fridge Logo"></img>
                        </div>

                        <div className="col-xs-8 col-lg-4">Bought items are displayed in four categories, Fruits & Vegetables, Meats,
                            Dairy and Other items. All items can also be searched using the search bar.</div>

                    </div>

                    <br></br>

                    <div className="row">

                        <div className="col-xs-3  col-xs-offset-1 col-lg-2 col-md-offset-3">
                            <img src={MealPlanningIcon} alt="Meal Planning Logo"></img>
                        </div>
                        <div className="col-xs-8 col-lg-4">Create your own meals using items from the fridge
                            or view previously saved meals. </div>
                    </div>

                    <br></br>


                    <div className="row" id="team">

                        <div className="col-sm-12 col-lg-6 col-md-offset-3">

                            <h4 className="page-header" id="second-heading">
                                <span className="page-title-text">Meet the Team</span>
                            </h4>

                            <div className="thumbnail" id="clear-thumbnail-border">
                                <img src={TeamPicture} alt="Team Picture"></img>
                                <div className="caption">
                                    <p>
                                        Meal.io was created by first term BCIT CST students. The app was
                                        built over a 5 week period using Bootstrap, React Javascript framework and
                                        FireBase for database.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-6 col-md-offset-3">
                            <a href="https://github.com/elishields/Meal.io">
                                <button type="button" className="btn btn-info btn-block buttons">
                                    Checkout our Github Repo </button>
                            </a>
                        </div>

                    </div>

                    <br></br>

                    <div className="row">
                        <div className="col-sm-12 col-lg-6 col-md-offset-3">
                            <a href="mailto:studyingatbcit@gmail.com">
                                <button type="button" className="btn btn-info btn-block buttons">
                                    Email: info@meal.io.ca </button>
                            </a>
                        </div>

                    </div>

                </div>
                <Footer/>
            </div>
    )
    }
    }

    export default AboutusPage;
