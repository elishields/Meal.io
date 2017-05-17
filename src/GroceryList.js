// Import classes from React
import React, { Component } from 'react';
import { Header, Footer } from './Navigation.js';

// Import style
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';

/*
 * ListItem: defines a single item for the grocery list
 */
export class ListItem extends React.Component {

    /*
     *  Constructor for ListItem
     */
    constructor(props) {
        super(props);

        console.log("ListItem constructor called. keyVal is " + this.props.keyVal + ". myId is " + this.props.myId)

        // Set state variables
        this.state = {itemName: props.itemName, amount: props.itemQuan, onChange: props.onChange};
        this.checkId = "check-" + this.props.myId;
        this.removeId = "remove-" + this.props.myId;

        // Bind reference to 'this' to member functions
        this.clearOnChange = this.clearOnChange.bind(this);
        this.restoreOnChange = this.restoreOnChange.bind(this);
        this.renderNameField = this.renderNameField.bind(this);
        this.updateName = this.updateName.bind(this);
    }

    renderNameField = function() {
        return (
            <input type="text"
                className="form-control"
                id={"grocery-item-input" + this.props.myId}
                placeholder="Enter an item"
                defaultValue={this.state.itemName}
                onChange={this.clearOnChange}
                onBlur={() => this.props.onBlur(this.props.keyVal, document.getElementById("grocery-item-input" + this.props.myId).value, 1)}
                aria-describedby="item name">
            </input>
        );
    }

    /*
     *  fires onChange function and then clears it.
     */
    clearOnChange = function() {
        this.state.onChange();

        this.setState({onChange: () => {}});
    }

    /*
     *  restores onChange function
     */
    restoreOnChange = function() {
        this.setState({onChange: this.props.onChange});
    }

    updateName = function() {
        this.setState((prevState, props) => {
            console.log("Value: " + document.getElementById("grocery-item-input" + this.props.myId).value);
            return({itemName: document.getElementById("grocery-item-input" + this.props.myId).value});
        });

        console.log("State: " + this.state.itemName);
    }

    /*
     *  render() defines the HTML template for this class.
     */
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="input-group" id="grocery-item">

                        <input type="number"
                            className="form-control"
                            id="grocery-item-quantity"
                            defaultValue={this.state.itemQuan}>
                        </input>

                        {this.renderNameField()}
                        
                        <input type="checkbox"
                            className="confirm-check"
                            id={this.checkId}
                            aria-label="confirm item">
                        </input>
                        
                        <span className="input-group-addon">
                            <label htmlFor={this.checkId} className="grocery-item-check-bg"><span></span></label>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

/*
 * GroceryList: defines our grocery list component.
 *
 * note: 'export' for classes we will use outside this file.
 */
export class GroceryList extends Component {

    constructor(props) {
        super(props);

        let rowsFruitandveg = [];
        props.rowsFruitandveg.forEach(function(item) {
            console.log(item.itemQuan + ", " + item.itemName);
            rowsFruitandveg.push(
                <ListItem key={item.key}
                    keyVal={item.key}
                    myId={"F" + item.key}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    container={rowsFruitandveg}/>
            )
        });

        this.state = {rowsFruitandveg: rowsFruitandveg};
    }

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
                                {this.state.rowsFruitandveg}
                                <div>
                                    <h4 className="grocery-subheader">
                                        <span className="grocery-subheader-text">DAIRY</span>
                                    </h4>
                                </div>
                                {this.props.rowsDairy}
                                <div>
                                    <h4 className="grocery-subheader">
                                        <span className="grocery-subheader-text">MEAT</span>
                                    </h4>
                                </div>
                                {this.props.rowsMeat}
                                <div>
                                    <h4 className="grocery-subheader">
                                        <span className="grocery-subheader-text">OTHER</span>
                                    </h4>
                                </div>
                                {this.props.rowsOther}
                            </div>
                        </div>
                    </div>
                </div>

				<div className="container-fluid">
					<div className="row">
                        <div className="col-xs-12">
                            <div className="grocery-button-row">
                                <button className="col-xs-6 btn btn-secondary" id="remove-button">DELETE</button>
                                <button className="col-xs-6 btn btn-secondary" id="add-to-fridge-button" >ADD TO FRIDGE</button>
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
