// Import classes from React
import React, { Component } from 'react';
import { Header, Footer } from './Navigation.js';

// Import style
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';

import CheckIcon from '../res/checked-checkbox.png';

//import and initialize firebase
import * as firebase from "firebase";
var config = {
    apiKey: "AIzaSyAjPS62DlOOIhne2zZyU59mdIV-LrFLxjw",
    authDomain: "mealio-d047c.firebaseapp.com",
    databaseURL: "https://mealio-d047c.firebaseio.com",
    projectId: "mealio-d047c",
    storageBucket: "mealio-d047c.appspot.com",
    messagingSenderId: "280670219948"
};
firebase.initializeApp(config);

/*
 * ListItem: defines a single item for the grocery list
 */
class ListItem extends React.Component {

    /*
     *  Constructor for ListItem
     */
    constructor(props) {
        super(props);

        // Set state variables
        this.state = {amount: 1, onChange: props.onChange};
        this.checkId = "check-" + this.props.myId;
        this.removeId = "remove-" + this.props.myId;
        this.groupId = "radgroup-" + this.props.myId;

        // Bind reference to 'this' to member functions
        this.clearOnChange = this.clearOnChange.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        //this.setAmount = this.setAmount.bind(this);
    }

    /*
     *  fires onChange function and then clears it.
     */
    clearOnChange = function() {
        this.state.onChange();
        this.state.onChange = () => {};
    }

    /*
     *  Increments this ListItem's amount.
     */
    increment = function() {
        this.setState((prevState, props) => {
            return({amount: prevState.amount + 1});
        });

    }

    /*
     *  Decrements this ListItem's amount.
     */
    decrement = function() {
        this.setState((prevState, props) => {
            return({amount: prevState.amount - 1});
        });
    }

    /*
     *  Getter for amount.
     */
    getAmount = function() {
        return(this.state.amount);
    }

    /*
     *  Setter for amount.
     */
    setAmount = function(n) {
        this.setState((prevState, props) => {
            return({amount: n});
        });
    }

    /*
     *  render() defines the HTML template for this class.
     */
    render() {
        return (
            <div className="input-group" id="grocery-item">
                <input type="tel" className="form-control" id="grocery-item-quantity" defaultValue="1"></input>
                <input type="text" className="form-control" id="grocery-item-input" placeholder="enter an item"
                       onChange={this.clearOnChange} aria-describedby="item name"></input>

				<input type="checkbox" name={this.groupId} className="confirm-check" id={this.checkId} aria-label="confirm item"></input>
				<span className="input-group-addon">
					<label htmlFor={this.checkId} className="grocery-item-check-bg"><span></span></label>
				</span>
            </div>
        );
    }
}

/*
 * GroceryList: defines our grocery list page.
 *
 * note: 'export' for classes we will use outside this file.
 */
export class GroceryList extends Component {

	/*
	 *  Constructor for GroceryList
	 */
	constructor(props) {
		super(props);
		
		/*
		 * Create an empty array to store ListItems, then push one new ListItem
		 * 
		 * key: index of new element
		 */
		let rows = [];
		rows.push(<ListItem key={0} myId={0} onChange={this.handleAddItem.bind(this)} name="NAME" />);
		
		/*
		 * set this.state.rows = rows
		 */
		this.state = {rows: rows};
	}
	
	/*
	 *  handler to add a ListItem to rows[]
	 */
	handleAddItem = function() {

		// reference to this GroceryList
		let handle = this;

		// update component state...
		this.setState((prevState, props) => {

			// get rows from component's previous state
			let newStateRows = prevState.rows;
			let nsrLength = newStateRows.length;
			// push a new ListItem to newStateRows
			newStateRows.push(<ListItem key={newStateRows.length} myId={newStateRows.length} name="Added Item" onChange={handle.handleAddItem.bind(handle)} />);

			// update GroceryList's state.rows = newStateRows
			return({rows: newStateRows});
		});
		
		// this isn't working yet, disregard!
		this.rebuildList();
	}
	

	/*
	 *  This isn't working yet, disregard!
	 */
	handleRemoveItem = function(index) {
		this.setState((prevState, props) => {
			let newStateRows = prevState.rows;
			newStateRows.splice(index, 1);
			return({rows: newStateRows});
		});
	}

	/*
	 *  this doesn't work yet, disregard!
	 */
	rebuildList = function() {
		this.setState((prevState, props) => {
	
			let newStateRows = prevState.rows;
	
			for(let i=0; i<newStateRows.length; i++) {
				if(newStateRows[i].amount === 0) {
					this.handleRemoveItem(i);
					i--;
				}
			}
		});
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
						<div className="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1">
							<h3 className="page-header" id="header-all">
								<span className="page-title-text">GROCERY LIST</span>
							</h3>
						</div>
					</div>
	    			{this.state.rows}
	      		</div>												

	      		<Footer />
      		</div>
	    );
  	}
}

export default GroceryList;
