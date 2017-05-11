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
export class Fridge extends React.Component {

    /*
     *  Constructor for Fridge.
     */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
                        <h3 className="page-header" id="header-all">
                            <span className="page-title-text">MY FRIDGE</span>
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="table-responsive" id="fridge-table">
                        <table className="table">
                            <tr>
                                <td className="fridge-category"><img src={FruitVeg} alt="FruitVeg" className="fridge-category-icon"/></td>
                                <td className="fridge-category"><img src={Dairy} alt="Dairy" className="fridge-category-icon"/></td>
                            </tr>
                            <tr>
                                <td className="fridge-category"><img src={Meat} alt="Meat" className="fridge-category-icon"/></td>
                                <td className="fridge-category"><img src={OtherIcon} alt="OtherIcon" className="fridge-category-icon"/></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

export default Fridge;
