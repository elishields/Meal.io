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

        this.handleAddFruitandveg = this.handleAddFruitandveg.bind(this);
        this.handleAddMeat = this.handleAddMeat.bind(this);
        this.handleAddDairy = this.handleAddDairy.bind(this);
        this.handleAddOther = this.handleAddOther.bind(this);
        this.buildRows = this.buildRows.bind(this);
        this.deleteFromFridge = this.deleteFromFridge.bind(this);
        this.sendToMeal = this.sendToMeal.bind(this);

        this.state = {
            rows: {
                FruitVeg: [],
                Meat: [],
                Dairy: [],
                Other: []
            },

            rowsFruitandveg: [],
            rowsMeat: [],
            rowsDairy: [],
            rowsOther: []
        };
    }

    componentWillMount() {
        this.props.readItems('fridge', this.buildRows.bind(this));
    }

    sendToMeal = function(){
        console.log("send to meal called in fridgeJS");
        let handle = this;
        handle.props.rowsFruitandveg.forEach(function(item){
            if (document.getElementById("check-F" + item.key).checked) {
                handle.props.addToMealPlan(item.key, item.itemName, document.getElementById("grocery-item-quantityF" + item.key).value, "fridgeFruitVeg", "myMeal");
            }
        })
        handle.props.rowsDairy.forEach(function(item){
            if (document.getElementById("check-D" + item.key).checked) {
                handle.props.addToMealPlan(item.key, item.itemName,  document.getElementById("grocery-item-quantityD" + item.key).value, "fridgeDairy", "myMeal");
            }
        })
        handle.props.rowsMeat.forEach(function(item){
            if (document.getElementById("check-M" + item.key).checked) {
                handle.props.addToMealPlan(item.key, item.itemName,  document.getElementById("grocery-item-quantityM" + item.key).value, "fridgeMeat", "myMeal");
            }
        })
        handle.props.rowsOther.forEach(function(item){
            if (document.getElementById("check-O" + item.key).checked) {
                handle.props.addToMealPlan(item.key, item.itemName,  document.getElementById("grocery-item-quantityO" + item.key).value, "fridgeOther", "myMeal");
            }
        })
    }

    deleteFromFridge = function(){
        let handle = this;
        handle.props.rowsFruitandveg.forEach(function(item){
            if (document.getElementById("check-F" + item.key).checked) {
                handle.props.deleteItems(item.key, "fridgeFruitVeg");
            }
        })

        handle.props.rowsMeat.forEach(function(item){
            if (document.getElementById("check-M" + item.key).checked) {
                handle.props.deleteItems(item.key, "fridgeMeat");
            }
        })

        handle.props.rowsDairy.forEach(function(item){
            if (document.getElementById("check-D" + item.key).checked) {
                handle.props.deleteItems(item.key, "fridgeDairy");
            }
        })

        handle.props.rowsOther.forEach(function(item){
            if (document.getElementById("check-O" + item.key).checked) {
                handle.props.deleteItems(item.key, "fridgeOther");
            }
        })
    }

    handleAddFruitandveg = function() {
        this.setState((prevState, props) => {
            let handle = this;

            let srcRows = props.rowsFruitandveg;
            let itemRows = prevState.rowsFruitandveg;

            let item = srcRows[srcRows.length - 1];

            if (srcRows.length !== itemRows.length) {
                itemRows.push(
                    <ListItem key={item.key}
                        keyVal={item.key}
                        myId={"F" + item.key}
                        isLast={item.isLast}
                        itemName={item.itemName}
                        itemQuan={item.itemQuan}
                        onBlur={item.onBlur}
                        onChange={item.onChange}
                        addHandler={handle.handleAddFruitandveg}
                        page={item.page}
                        category={item.category}/>
                )
            }

            return({rowsFruitandveg: itemRows});
        });
    }

    handleAddMeat = function() {
        this.setState((prevState, props) => {
            let handle = this;

            let srcRows = props.rowsMeat;
            let itemRows = prevState.rowsMeat;

            let item = srcRows[srcRows.length - 1];

            if (srcRows.length !== itemRows.length) {
                itemRows.push(
                    <ListItem key={item.key}
                        keyVal={item.key}
                        myId={"M" + item.key}
                        isLast={item.isLast}
                        itemName={item.itemName}
                        itemQuan={item.itemQuan}
                        onBlur={item.onBlur}
                        onChange={item.onChange}
                        addHandler={handle.handleAddMeat}
                        page={item.page}
                        category={item.category}/>
                )
            }
            
            return({rowsMeat: itemRows});
        });
    }

    handleAddDairy = function() {
        this.setState((prevState, props) => {
            let handle = this;

            let srcRows = props.rowsDairy;
            let itemRows = prevState.rowsDairy;

            let item = srcRows[srcRows.length - 1];

            if (srcRows.length !== itemRows.length) {
                itemRows.push(
                    <ListItem key={item.key}
                        keyVal={item.key}
                        myId={"D" + item.key}
                        isLast={item.isLast}
                        itemName={item.itemName}
                        itemQuan={item.itemQuan}
                        onBlur={item.onBlur}
                        onChange={item.onChange}
                        addHandler={handle.handleAddDairy}
                        page={item.page}
                        category={item.category}/>
                )
            }
            
            return({rowsDairy: itemRows});
        });
    }

    handleAddOther = function() {
        this.setState((prevState, props) => {
            let handle = this;

            let srcRows = props.rowsOther;
            let itemRows = prevState.rowsOther;

            let item = srcRows[srcRows.length - 1];

            if (srcRows.length !== itemRows.length) {
                itemRows.push(
                    <ListItem key={item.key}
                        keyVal={item.key}
                        myId={"O" + item.key}
                        isLast={item.isLast}
                        itemName={item.itemName}
                        itemQuan={item.itemQuan}
                        onBlur={item.onBlur}
                        onChange={item.onChange}
                        addHandler={handle.handleAddOther}
                        page={item.page}
                        category={item.category}/>
                )
            }
            
            return({rowsOther: itemRows});
        });
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
                    isLast={item.isLast}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    addHandler={handle.handleAddFruitandveg}
                    page={item.page}
                    category={item.category}/>
            )
        });

        let rowsMeat = [];
        this.props.rowsMeat.forEach(function(item) {
            rowsMeat.push(
                <ListItem key={item.key}
                    keyVal={item.key}
                    myId={"M" + item.key}
                    isLast={item.isLast}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    addHandler={handle.handleAddMeat}
                    page={item.page}
                    category={item.category}/>
            )
        });

        let rowsDairy = [];
        this.props.rowsDairy.forEach(function(item) {
            rowsDairy.push(
                <ListItem key={item.key}
                    keyVal={item.key}
                    myId={"D" + item.key}
                    isLast={item.isLast}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    addHandler={handle.handleAddDairy}
                    page={item.page}
                    category={item.category}/>
            )
        });

        let rowsOther = [];
        this.props.rowsOther.forEach(function(item) {
            rowsOther.push(
                <ListItem key={item.key}
                    keyVal={item.key}
                    myId={"O" + item.key}
                    isLast={item.isLast}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    addHandler={handle.handleAddOther}
                    page={item.page}
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
                                <h4 className="subheader">
                                    <span className="subheader-text">FRUIT & VEG</span>
                                </h4>
                                <p className="fridge-category-content">{this.state.rowsFruitandveg}</p>
                            </div>
                            <div className="fridge-category" id="fridge-category-dairy">
                                <h4 className="subheader">
                                    <span className="subheader-text">DAIRY</span>
                                </h4>
                                <p className="fridge-category-content">{this.state.rowsDairy}</p>
                            </div>
                            <div className="fridge-category" id="fridge-category-meat">
                                <h4 className="subheader">
                                    <span className="subheader-text">MEAT</span>
                                </h4>
                                <p className="fridge-category-content">{this.state.rowsMeat}</p>
                            </div>
                            <div className="fridge-category" id="fridge-category-other">
                                <h4 className="subheader">
                                    <span className="subheader-text">OTHER</span>
                                </h4>
                                <p className="fridge-category-content">{this.state.rowsOther}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="grocery-button-row" id="grocery-button-row">

                                <button className="col-xs-6 btn btn-secondary" id="remove-button" onClick={this.deleteFromFridge}>DELETE</button>
                                <button className="col-xs-6 btn btn-secondary" id="add-to-fridge-button" onClick={this.sendToMeal}>CREATE MEAL</button>

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
