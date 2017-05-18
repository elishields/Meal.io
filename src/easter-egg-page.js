// Import classes from React
import React, { Component } from 'react';
import { EasterHeader, EasterFooter } from './Navigation.js';

// Import style
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';
import { Link } from 'react-router-dom';


/*
 * GroceryList: defines our grocery list component.
 *
 * note: 'export' for classes we will use outside this file.
 */
export class EasterGroceryList extends Component {

    /*
     *  render() defines the HTML template for this class.
     */
    render() {
        return (
            <div>
                <EasterHeader />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
                            <h3 className="page-header" id="header-all">
                                <span className="page-title-text" id="easter-page-title-text">
                                    <Link to="/list"> EASTER GROCERY LIST</Link></span>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <div id="grocery-subheadings">
                                <div>
                                    <h4 className="grocery-subheader">
                                        <span className="easter-grocery-subheader-text">FRUIT & VEG</span>
                                    </h4>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="input-group" id="grocery-item">
                                            <input type="number" className="form-control" id="easter-grocery-item-quantity">

                                            </input>
                                            <input type="text" className="form-control" id="grocery-item-input"
                                                   placeholder="EW ! "
                                                   aria-describedby="item name">

                                            </input>
                                            <input type="checkbox" className="confirm-check" aria-label="confirm item">

                                            </input>
                                            <span className="input-group-addon">
                                                <label  className="grocery-item-check-bg">

                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="grocery-subheader">
                                        <span className="easter-grocery-subheader-text">DAIRY</span>
                                    </h4>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="input-group" id="grocery-item">
                                            <input type="number" className="form-control" id="easter-grocery-item-quantity">

                                            </input>
                                            <input type="text" className="form-control" id="grocery-item-input"
                                                   placeholder="EVEN WORSE THAN FRUITS AND VEG !"
                                                   aria-describedby="item name">

                                            </input>
                                            <input type="checkbox" className="confirm-check" aria-label="confirm item">

                                            </input>
                                            <span className="input-group-addon">
                                                <label  className="grocery-item-check-bg">

                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="grocery-subheader">
                                        <span className="easter-grocery-subheader-text">MEAT</span>
                                    </h4>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="input-group" id="grocery-item">
                                            <input type="number" className="form-control" id="easter-grocery-item-quantity">

                                            </input>
                                            <input type="text" className="form-control" id="grocery-item-input"
                                                   placeholder="NOW WERE TALKING !"
                                                   aria-describedby="item name">

                                            </input>
                                            <input type="checkbox" className="confirm-check" aria-label="confirm item">

                                            </input>
                                            <span className="input-group-addon">
                                                <label  className="grocery-item-check-bg">

                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="grocery-subheader">
                                        <span className="easter-grocery-subheader-text">OTHER</span>
                                    </h4>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="input-group" id="grocery-item">
                                            <input type="number" className="form-control" id="easter-grocery-item-quantity">

                                            </input>
                                            <input type="text" className="form-control" id="grocery-item-input"
                                                   placeholder="PIZZA PIZZA PIZZA PIZZA !"
                                                   aria-describedby="item name">

                                            </input>
                                            <input type="checkbox" className="confirm-check" aria-label="confirm item">

                                            </input>
                                            <span className="input-group-addon">
                                                <label  className="grocery-item-check-bg">

                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="grocery-button-row">
                                <button className="col-xs-6 btn btn-secondary" id="easter-remove-button">Eat Everything</button>
                                <button className="col-xs-6 btn btn-secondary" id="easter-add-to-fridge-button">Eat Everything</button>
                            </div>
                        </div>
                    </div>
                </div>

                <EasterFooter />
            </div>
        );
    }
}

export default EasterGroceryList;
