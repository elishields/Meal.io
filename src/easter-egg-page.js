// Import classes from React
import React, { Component } from 'react';
import { Header, Footer } from './Navigation.js';

// Import style
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';



/*
 * GroceryList: defines our grocery list component.
 *
 * note: 'export' for classes we will use outside this file.
 */
export class GroceryList extends Component {

    /*
     *  render() defines the HTML template for this class.
     */
    render() {
        return (
            <div>
                <Header />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
                            <h3 className="page-header" id="header-all">
                                <span className="page-title-text">GROCERY LIST</span>
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
                                        <span className="grocery-subheader-text">FRUIT & VEG</span>
                                    </h4>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="input-group" id="grocery-item">
                                            <input type="number" className="form-control" id="grocery-item-quantity">

                                            </input>
                                            <input type="text" className="form-control" id="grocery-item-input"
                                                   placeholder="Enter an item"
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
                                        <span className="grocery-subheader-text">DAIRY</span>
                                    </h4>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="input-group" id="grocery-item">
                                            <input type="number" className="form-control" id="grocery-item-quantity">

                                            </input>
                                            <input type="text" className="form-control" id="grocery-item-input"
                                                   placeholder="Enter an item"
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
                                        <span className="grocery-subheader-text">MEAT</span>
                                    </h4>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="input-group" id="grocery-item">
                                            <input type="number" className="form-control" id="grocery-item-quantity">

                                            </input>
                                            <input type="text" className="form-control" id="grocery-item-input"
                                                   placeholder="Enter an item"
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
                                        <span className="grocery-subheader-text">OTHER</span>
                                    </h4>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="input-group" id="grocery-item">
                                            <input type="number" className="form-control" id="grocery-item-quantity">

                                            </input>
                                            <input type="text" className="form-control" id="grocery-item-input"
                                                   placeholder="Enter an item"
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
                                <button className="col-xs-6 btn btn-secondary" id="remove-button">DELETE</button>
                                <button className="col-xs-6 btn btn-secondary" id="add-to-fridge-button">ADD TO FRIDGE</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default GroceryList;
