import React, { Component } from 'react';
import '../src/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';
import EcoListLogo from '../res/EcoListLogo.png';
import FoodFactoryLogo from '../res/Foodfactorylogo.png';
import Pocketpantry from '../res/Pocketpantry.png';


export class AffiliatedPage extends React.Component {

    render() {

        return (
            <div className="container" id="entire-container">
            <h2>Affiliated Apps</h2>
            <p>Checkout these super cool apps created to reduce food waste by fellow students at BCIT.</p>

            <div className="row">
                <div className="col-md-4">
                    <div className="thumbnail">
                        <img src={FoodFactoryLogo} id="first-logo" alt="Food Factory Logo"></img>
                        <div className="caption">
                            <p><a href="#">Food Factory</a> a time-based drag and drop game. Players need to pick and
                                match the ingredients on the belt conveyor with recipes without wasting them.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="thumbnail">
                        <img src={EcoListLogo} alt="EcoList Logo"></img>
                        <div className="caption">
                            <p><a href="http://www.eco-list.ca">EcoList</a> is a meal planner and shopping list
                                combination. Users can choose from a preset meal plan or create their own, can input
                                items to list from meal planner.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4" id="last-div">
                    <div className="thumbnail">
                        <img src={Pocketpantry}  alt="PocketPantry Logo"></img>
                        <div className="caption">
                            <p><a href="#">Pocket Pantry</a> is designed to help create easy plan meal planning and
                                calculation of necessary ingredients for efficient grocery lists to reduce wasteful
                                expenditure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)

    }

}

export default AffiliatedPage;
