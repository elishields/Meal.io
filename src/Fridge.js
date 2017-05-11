// Import classes from React
import React, { Component } from 'react';

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
 * FridgeTable: displays food categories within the fridge.
 *
 * Note: 'export' for classes we will use outside this file.
 */
export class Fridge extends Component {

    /*
     *  Constructor for Fridge.
     */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid" id="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h3 className="page-header" id="header-all">
                            <span className="page-title-text">MY FRIDGE</span>
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                            <table className="table table-responsive" id="fridge-table">
                                <tr className="fridge-table-row">
                                    <td>
                                        <img className="fridge-category" src={FruitVeg} alt="FruitVeg"/>
                                    </td>
                                    <td>
                                        <img className="fridge-category" src={Dairy} alt="Dairy"/>
                                    </td>
                                </tr>
                                <tr className="fridge-table-row">
                                    <td>
                                        <img className="fridge-category" src={Meat} alt="Meat"/>
                                    </td>
                                    <td>
                                        <img className="fridge-category" src={OtherIcon} alt="OtherIcon"/>
                                    </td>
                                </tr>
                            </table>
                    </div>
                </div>
            </div>

        )
    }
}

export default Fridge;
