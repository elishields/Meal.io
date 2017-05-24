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

        this.state = {};
    }

    componentWillMount() {
        this.props.readFridge(this.buildRows.bind(this));
    }

    buildRows() {
        this.setState((prevState, props) => {
            let newFruitandveg = [];
            let newMeat = [];
            let newDairy = [];
            let newOther = [];

            this.props.rowsMeat.forEach(function(item) {
                newMeat.push(item.itemName);
                newMeat.push(<br />);
            });

            this.props.rowsDairy.forEach(function(item) {
                newDairy.push(item.itemName);
                newDairy.push(<br />);
            });

            this.props.rowsOther.forEach(function(item) {
                newOther.push(item.itemName);
                newOther.push(<br />);
            });

            return({
                rowsFruitandveg: newFruitandveg,
                rowsMeat: newMeat,
                rowsDairy: newDairy,
                rowsOther: newOther
            });
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
                    {/*<Tips />*/}
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

                <Footer />
            </div>
        )
    }
}

export default Fridge;
