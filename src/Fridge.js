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
     *  Constructor for Fridge.
     */
    constructor(props) {
        super(props);
    }

    /*
     *  render() returns the HTML template for Fridge
     */
    render() {
        return (
            <div>
                <Header />

                <div className="container-fluid" id="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3 className="page-header" id="header-all">
                                <span className="page-title-text">MY FRIDGE</span>
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1" id="fridge-col">
                            <table className="table" id="fridge-table">
                                <tr className="fridge-table-row">
                                    <td className="fridge-category">
                                        <img className="fridge-category-icon" src={FruitVeg} alt="FruitVeg"/>
                                    </td>
                                    <td className="fridge-category">
                                        <img className="fridge-category-icon" src={Dairy} alt="Dairy"/>
                                    </td>
                                </tr>
                                <tr className="fridge-table-row">
                                    <td className="fridge-category">
                                        <img className="fridge-category-icon" src={Meat} alt="Meat"/>
                                    </td>
                                    <td className="fridge-category">
                                        <img className="fridge-category-icon" src={OtherIcon} alt="OtherIcon"/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Fridge;
