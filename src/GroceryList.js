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

        // Bind reference to 'this' to member functions
        this.clearOnChange = this.clearOnChange.bind(this);
        this.restoreOnChange = this.restoreOnChange.bind(this);

        this.getAmount = this.getAmount.bind(this);
        this.setAmount = this.setAmount.bind(this);
    }

    /*
     *  fires onChange function and then clears it.
     */
    clearOnChange = function() {
        this.state.onChange();
        this.state.onChange = () => {};
    }

    /*
     *  restores onChange function
     */
    restoreOnChange = function() {
    	this.setState({onChange: this.props.onChange});
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
                <input type="number" className="form-control" id="grocery-item-quantity" defaultValue={this.props.itemQuan}></input>
                <input type="text" className="form-control" id="grocery-item-input" placeholder="Enter an item" defaultValue={this.props.itemName}
                       onChange={this.clearOnChange} aria-describedby="item name"></input>

				<input type="checkbox" className="confirm-check" id={this.checkId} aria-label="confirm item"></input>
				<span className="input-group-addon">
					<label htmlFor={this.checkId} className="grocery-item-check-bg"><span></span></label>
				</span>
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

	/*
	 *  Constructor for GroceryList
	 */
	constructor(props) {
		super(props);

		this.deleteItems = this.deleteItems.bind(this);
		this.handleAddItem = this.handleAddItem.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.readItems = this.readItems.bind(this);

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
	handleAddItem = function(name, quan) {
        // reference to this GroceryList
		let handle = this;

		// update component state...
		this.setState((prevState, props) => {

			// get rows from component's previous state
			let newStateRows = prevState.rows;
			// push a new ListItem to newStateRows
			newStateRows.push(<ListItem key={newStateRows.length} itemName={name} itemQuan={quan} myId={newStateRows.length} name="Added Item" onChange={handle.handleAddItem.bind(handle)} />);

			// update GroceryList's state.rows = newStateRows
			return({rows: newStateRows});
		});
	}

	handleAddEmptyItem = function (){

	    //TODO:LIAM WORK YOUR WIZARDRY

    }

	handleRemoveItem = function(index) {
		// Remove item at 'index' from the database
	}

	deleteItems = function() {
		let rows = this.state.rows;
		let safe=0;

		for(let i=0; i<rows.length; i++, safe++) {
			if(document.getElementById("check-" + i).checked) {
				this.handleRemoveItem(i);
			}
		}
	}

	readItems = function() {
		this.setState((prevState, props) => {
        let newRows = [];
        let rowId = 0;
        let handle = this;
			// Read items from the database
			let listPath = firebase.auth().currentUser.uid + "/shopList/";
			let ref = new firebase.database().ref(listPath);
            ref.once("value")
                .then(function(snapshot){
                    snapshot.forEach(function(childSnapshot){
                        var itemName = childSnapshot.key;
                        var itemQuan = childSnapshot.val();
                        handle.handleAddItem(itemName, itemQuan);
                        console.log("we got: " + itemQuan + " " + itemName);
                        rowId ++;
                    })
                })
            handle.handleAddEmptyItem();
			return({rows: newRows});
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

	      		<div className="grocery-button-row">
	    			<div className="container-fluid">
		    			<div className="row">
		    				<button id="remove-button" onClick={this.deleteItems} className="col-xs-6 btn btn-secondary">delete</button>
		    				<button id="to-fridge-button" className="col-xs-6 btn btn-secondary">send to fridge</button>
		    			</div>
	    			</div>
      			</div>

	      		<Footer />
      		</div>
	    );
  	}
}

export default GroceryList;