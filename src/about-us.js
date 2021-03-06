import React, { Component } from 'react';
import FacebookProvider, { ShareButton } from 'react-facebook';

import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';

import GroceryListIcon from '../res/grocery-list-about-us.svg';
import MyFridgeIcon from '../res/fridge-about-us.svg';
import MealPlanningIcon from '../res/plate-about-us.svg';
import FaceBookLogo from '../res/facebook-logo.png';

import { Header } from './Navigation.js';
import { Footer } from './Navigation.js';
import { Tips } from './Navigation.js';
import './App.css';

class ShareMealio extends Component {
  render() {
    return (

    <div className="row">

        <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3" id="facebook-button">

            <FacebookProvider appId="816345498530418">

                <ShareButton  className="btn btn-info btn-block btn-xs" id="no-border-f-button"
                              href="http://www.mealio.tk"
                              quote="Mealio is your new meal manager! Use it to make grocery lists,
                                  track perishable foods in your fridge, and create meal plans!
                                  We hope it helps you waste less food!" >
                                <img className="fb-icon" src={FaceBookLogo} alt="Facebook-logo">
                                </img>
                    </ShareButton>

            </FacebookProvider>
        </div>

    </div>

    );
  }
}

export class AboutusPage extends Component {

    render() {

        return (
            <div>
                <Header/>
                <Tips />
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-md-offset-3">
                            <h3 className="page-header" id="header-all">
                                <span className="page-title-text">ABOUT US</span>
                            </h3>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                            <p>
                                Mealio is your new meal manager!
                                <br/>
                                Make grocery lists, track foods in your fridge, and create meal plans!
                                <br/>
                                We hope it helps you waste less food!
                            </p>
                        </div>
                    </div>

                    <br></br>

                    <div className="row">
                        <div className="col-xs-3 col-xs-offset-1 col-md-2 col-md-offset-3">
                            <img className="three-icons" src={GroceryListIcon} alt="Grocery List Logo"></img>
                        </div>
                        <div className="col-xs-7 col-lg-4">
                            Plan ahead by writing up a grocery list before shopping.
                            <div className="row">

                                <div className="col-xs-12">
                                    Once you've bought your groceries, simply tap to send them to your fridge!
                                </div>
                            </div>
                        </div>

                    </div>

                    <br></br>

                    <div className="row">

                        <div className="col-xs-3 col-xs-offset-1 col-md-2 col-md-offset-3">
                            <img className="three-icons" src={MyFridgeIcon} alt="Fridge Logo"></img>
                        </div>

                        <div className="col-xs-7 col-lg-4">
                            Your fridge has 4 categories: Fruits & Veggies, Dairy, Meats, and Other items.
                            <div className="row">

                                <div className="col-xs-12">
                                    Find your items by simply scrolling through your inventory, or tap the icons to jump to them!
                                </div>
                            </div>
                        </div>


                    </div>

                    <br></br>

                    <div className="row">

                        <div className="col-xs-3 col-xs-offset-1 col-md-2 col-md-offset-3">
                            <img className="three-icons" src={MealPlanningIcon} alt="Meal Planning Logo"></img>
                        </div>
                        <div className="col-xs-7 col-lg-4">
                            Dream up delicious meals using the Meal Planner!
                            <div className="row">

                                <div className="col-xs-12">
                                    It's easy to add foods from your fridge!
                                </div>
                            </div>
                        </div>

                    </div>

                    <br></br>

                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-md-offset-3">
                            <h4 className="page-header" id="second-heading">
                                <span className="page-title-text">About the Team</span>
                            </h4>
                        </div>
                    </div>

                    <div className="row">

                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                                Mealio was created by a small-team of dedicated Computer Systems Technology students
                                at BCIT!
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                                Built for Metro Vancouver's food-waste reduction plan,
                                Mealio offers users a simple way to manage the food in their lives!
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                                We built Mealio using ReactJS, Bootstrap, and Firebase. Please hire us!
                            </div>
                        </div>

                    </div>

                    <br></br>

                    <div className="row" >
                        <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3" >
                            <a href="mailto:mealioapp@gmail.com">
                                <button id="buttons" type="button" className="btn btn-info btn-block btn-lg">
                                    Contact Us
                                </button>
                            </a>
                        </div>
                    </div>

                    <br></br>

                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                            <a href="https://github.com/elishields/Meal.io">
                                <button id="buttons" type="button" className="btn btn-info btn-block btn-lg">
                                    Our GitHub Repo
                                </button>
                            </a>
                        </div>
                    </div>

                    <br></br>

                    <ShareMealio />

                </div>
                <Footer/>
            </div>
        )
    }
}

export default AboutusPage;