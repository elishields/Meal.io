import React, { Component } from 'react';
import '../src/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';
import EcoListLogo from '../res/EcoListLogo.png';
import FoodFactoryLogo from '../res/Foodfactorylogo.png';
import Pocketpantry from '../res/Pocketpantry.png';
import { Header } from './Navigation.js';
import { Footer } from './Navigation.js';
import { Tips } from './Navigation.js';

export class AffiliatedPage extends Component {

    render() {

        return (
            <div>
            <Header/>
            <Tips />
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
                        <h3 className="page-header" id="header-all">
                            <span className="page-title-text">AFFILIATED APPS</span>
                        </h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-11 col-xs-offset-1" id="affiliate-blurb">
                        <p>Check out these food-waste reduction apps created by BCIT students:</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-xs-10 col-xs-offset-1">
                        <div className="thumbnail">
                            <a href="https://foodfactoryzero.firebaseapp.com/">
                                <img src={FoodFactoryLogo} className="affiliate-image" id="top-thumbnail" alt="Food Factory Logo"></img>
                            </a>
                            <div className="caption">
                                <p>
                                    <span className="affiliate-title">Food Factory</span> is a
                                    time-based drag and drop game.
                                    Players need to pick and match the ingredients on the belt
                                    conveyor with recipes without wasting them.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-10 col-xs-offset-1">
                        <div className="thumbnail">
                            <a href="http://www.eco-list.ca">
                                <img src={EcoListLogo} className="affiliate-image" alt="EcoList Logo"></img>
                            </a>
                            <div className="caption">
                                <p>
                                    <span className="affiliate-title">EcoList</span> is
                                    a meal planner and shopping list
                                    combination. Users can choose from a preset meal plan or create their own, can input
                                    items to list from meal planner.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-xs-10 col-xs-offset-1" id="bottom-thumbnail">
                        <div className="thumbnail">
                            <a href="www.students.bcitdev.com/A01005523/comp2910/PocketPantry/sign_in.html">
                                <img src={Pocketpantry} className="affiliate-image" alt="PocketPantry Logo"></img>
                            </a>
                            <div className="caption">
                                <p>
                                    <span className="affiliate-title">Pocket Pantry</span> is designed to help create easy plan meal planning and
                                    calculation of necessary ingredients for efficient grocery lists to reduce wasteful
                                    expenditure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
            </div>
        )
    }
}

export default AffiliatedPage;
