// Import classes from React
import React, { Component } from 'react';
import { ListItem } from './GroceryList.js';

// Import our classes
import { Header, Footer, Tips } from './Navigation.js';

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

    constructor(props) {
        super(props);

        this.buildRows = this.buildRows.bind(this);

        this.state = {
            rowsFruitandveg: [],
            rowsMeat: [],
            rowsDairy: [],
            rowsOther: []
        };
    }

    componentWillMount() {
        this.props.readItems('fridge', this.buildRows.bind(this));
    }

    buildRows = function() {
        let handle = this;
        let rowsFruitandveg = [];
        this.props.rowsFruitandveg.forEach(function(item) {
            console.log("adding " + item.itemName)
            rowsFruitandveg.push(
                <ListItem key={item.key}
                    keyVal={item.key}
                    myId={"F" + item.key}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    addHandler={handle.handleAddFruitandveg}
                    category={item.category}/>
            )
        });

        let rowsMeat = [];
        this.props.rowsMeat.forEach(function(item) {
            rowsMeat.push(
                <ListItem key={item.key}
                    keyVal={item.key}
                    myId={"M" + item.key}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    addHandler={handle.handleAddMeat}
                    category={item.category}/>
            )
        });

        let rowsDairy = [];
        this.props.rowsDairy.forEach(function(item) {
            rowsDairy.push(
                <ListItem key={item.key}
                    keyVal={item.key}
                    myId={"D" + item.key}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    addHandler={handle.handleAddDairy}
                    category={item.category}/>
            )
        });

        let rowsOther = [];
        this.props.rowsOther.forEach(function(item) {
            rowsOther.push(
                <ListItem key={item.key}
                    keyVal={item.key}
                    myId={"O" + item.key}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    addHandler={handle.handleAddOther}
                    category={item.category}/>
            )
        });

        this.setState((prevState, props) => {
            return({rowsFruitandveg: rowsFruitandveg,
                rowsMeat: rowsMeat,
                rowsDairy: rowsDairy,
                rowsOther: rowsOther});
        });
    }

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
                    <Tips />
                    <div className="row">
                        <div id="fridge-icon-row">
                            <div className="fridge-category-col col-xs-3 col-md-2 col-md-offset-2">
                                <a href="#fridge-category-fruit-veg">
                                    <img className="fridge-category-icon" src={FruitVeg} alt="FruitVeg"/>
                                </a>
                            </div>
                            <div className="fridge-category-col col-xs-3 col-md-2">
                                <a href="#fridge-category-dairy">
                                    <img className="fridge-category-icon" src={Dairy} alt="Dairy"/>
                                </a>
                            </div>
                            <div className="fridge-category-col col-xs-3 col-md-2">
                                <a href="#fridge-category-meat">
                                    <img className="fridge-category-icon" src={Meat} alt="Meat"/>
                                </a>
                            </div>
                            <div className="fridge-category-col col-xs-3 col-md-2">
                                <a href="#fridge-category-other">
                                    <img className="fridge-category-icon" src={OtherIcon} alt="OtherIcon"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12" id="fridge-list content-section">
                            <div className="fridge-category" id="fridge-category-fruit-veg">
                                <h4 className="fridge-category-title">Fruits & Vegetables</h4>
                                <p className="fridge-category-content">{this.state.rowsFruitandveg}</p>
                            </div>
                            <div className="fridge-category" id="fridge-category-dairy">
                                <h4 className="fridge-category-title">Dairy</h4>
                                <p className="fridge-category-content">{this.state.rowsDairy}</p>
                            </div>
                            <div className="fridge-category" id="fridge-category-meat">
                                <h4 className="fridge-category-title">Meat</h4>
                                <p className="fridge-category-content">{this.state.rowsMeat}</p>
                            </div>
                            <div className="fridge-category" id="fridge-category-other">
                                <h4 className="fridge-category-title">Other</h4>
                                <p className="fridge-category-content">{this.state.rowsOther}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="grocery-button-row" id="grocery-button-row">

                                <button className="col-xs-6 btn btn-secondary" id="remove-button" onClick={this.readAndBuild}>DELETE</button>
                                <button className="col-xs-6 btn btn-secondary" id="add-to-fridge-button" onClick={this.props.sendToFridge}>CREATE MEAL</button>

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
