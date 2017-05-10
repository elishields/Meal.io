// Import classes from React
import React, { Component } from 'react';

//Import our resources
import Apple from '../res/apple.svg';
import Cheese from '../res/cheese.svg';
import Meat from '../res/meat.svg';
import Veg from '../res/veg.svg';

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
                <div className="">
                    <h3 className="page-header">
                        <span className="page-title-text">MY FRIDGE</span>
                    </h3>
                </div>
                <div className="table-responsive" id="fridge-table">
                    <table className="table">
                        <tr>
                            <td className="fridge-category"><img src={Apple} alt="Apple" className="fridge-category-icon"/></td>
                            <td className="fridge-category"><img src={Cheese} alt="Cheese" className="fridge-category-icon"/></td>
                        </tr>
                        <tr>
                            <td className="fridge-category"><img src={Meat} alt="Meat" className="fridge-category-icon"/></td>
                            <td className="fridge-category"><img src={Veg} alt="Veg" className="fridge-category-icon"/></td>
                        </tr>
                    </table>
                </div>
            </div>

        )
    }
}

export default Fridge;
