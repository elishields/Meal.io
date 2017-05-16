// Import classes from React
import React, { Component } from 'react';

// Import our classes
import { Header, Footer } from './Navigation.js';

//Import our resources
import FruitVeg from '../res/fruit-veg-icon.png';
import Dairy from '../res/dairy-icon.png';
import Meat from '../res/meat-icon.png';
import OtherIcon from '../res/other-icon.png';

// Import styles
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';

/*
 * Fridge: displays food categories within the fridge.
 */
export class Fridge extends Component {

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
                                <span className="page-title-text">MY FRIDGE</span>
                            </h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12" id="fridge-icon-row">
                            <div className="col-xs-3 fridge-category-col">
                                <img className="fridge-category-icon" src={FruitVeg} alt="FruitVeg"/>
                            </div>
                            <div className="col-xs-3 fridge-category-col">
                                <img className="fridge-category-icon" src={Dairy} alt="Dairy"/>
                            </div>
                            <div className="col-xs-3 fridge-category-col">
                                <img className="fridge-category-icon" src={Meat} alt="Meat"/>
                            </div>
                            <div className="col-xs-3 fridge-category-col">
                                <img className="fridge-category-icon" src={OtherIcon} alt="OtherIcon"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12" id="fridge-list">
                            <div className="fridge-category" id="fridge-category-fruit-veg">
                                <h4 className="fridge-category-title">Fruits & Vegetables</h4>
                                <p className="fridge-category-content">Sample</p>
                            </div>
                            <div className="fridge-category" id="fridge-category-dairy">
                                <h4 className="fridge-category-title">Dairy</h4>
                                <p className="fridge-category-content">Sample</p>
                            </div>
                            <div className="fridge-category" id="fridge-category-meat">
                                <h4 className="fridge-category-title">Meat</h4>
                                <p className="fridge-category-content">Sample</p>
                            </div>
                            <div className="fridge-category" id="fridge-category-other">
                                <h4 className="fridge-category-title">Other</h4>
                                <p className="fridge-category-content">Sample</p>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        )
    }
}

export default Fridge;
