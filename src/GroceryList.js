// Import classes from React
import React, { Component } from 'react';
import { Header, Footer } from './Navigation.js';

// Import style
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';

//import and initialize firebase
import * as firebase from "firebase";

/*
 * ListItem: defines a single item for the grocery list
 */
export class ListItem extends React.Component {

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
        this.setState({onChange: () => {}});
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
            <div className="container-fluid">
                <div className="row">
                    <div className="input-group" id="grocery-item">
                        <input type="number" className="form-control" id="grocery-item-quantity" defaultValue={this.props.itemQuan}></input>
                        <input type="text" className="form-control" id="grocery-item-input" placeholder="Enter an item" defaultValue={this.props.itemName}
                               onChange={this.clearOnChange} aria-describedby="item name"></input>
                        <input type="checkbox" className="confirm-check" id={this.checkId} aria-label="confirm item"></input>
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

	/*
	 *  Constructor for GroceryList
	 */
	constructor(props, context) {
		super(props);

		this.deleteItems = this.deleteItems.bind(this);
		this.handleAddFruitVeg = this.handleAddFruitVeg.bind(this);
        this.handleAddDairy = this.handleAddDairy.bind(this);
        this.handleAddMeat = this.handleAddMeat.bind(this);
        this.handleAddOther = this.handleAddOther.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.readItems = this.readItems.bind(this);

		/*
		 * Create an empty array to store ListItems, then push one new ListItem
		 * 
		 * key: index of new element
		 */
		let rowsFruitVeg = [];
		rowsFruitVeg.push(<ListItem key={0} myId={0} onChange={this.handleAddFruitVeg.bind(this)} name="NAME" />);
        let rowsMeat = [];
        rowsMeat.push(<ListItem key={0} myId={0} onChange={this.handleAddMeat.bind(this)} name="NAME" />);
        let rowsDairy = [];
        rowsDairy.push(<ListItem key={0} myId={0} onChange={this.handleAddDairy.bind(this)} name="NAME" />);
        let rowsOther = [];
        rowsOther.push(<ListItem key={0} myId={0} onChange={this.handleAddOther.bind(this)} name="NAME" />);

		/*
		 * set this.state.rows = rows
		 */
		this.state = {rowsFruitVeg: rowsFruitVeg,
            rowsMeat: rowsMeat,
            rowsDairy: rowsDairy,
            rowsOther: rowsOther
        };
	}

	handleAddFruitVeg = function(name, quan){
        // reference to this GroceryList
	    let handle = this;
        // update component state...
        this.setState((prevState, props) => {

            // get rows from component's previous state
            let newStateRowsFruitVeg = prevState.rowsFruitVeg;
            // push a new ListItem to newStateRows
            newStateRowsFruitVeg.push(<ListItem key={newStateRowsFruitVeg.length} itemName={name} itemQuan={quan} myId={newStateRowsFruitVeg.length} name="Added Item" onChange={handle.handleAddFruitVeg.bind(handle)} />);

            // update GroceryList's state.rows = newStateRows
            return({rowsFruitVeg: newStateRowsFruitVeg});
        });
    }

    handleAddMeat = function(name, quan){
        // reference to this GroceryList
        let handle = this;
        // update component state...
        this.setState((prevState, props) => {

            // get rows from component's previous state
            let newStateRowsMeat = prevState.rowsMeat;
            // push a new ListItem to newStateRows
            newStateRowsMeat.push(<ListItem key={newStateRowsMeat.length} itemName={name} itemQuan={quan} myId={newStateRowsMeat.length} name="Added Item" onChange={handle.handleAddMeat.bind(handle)} />);

            // update GroceryList's state.rows = newStateRows
            return({rowsMeat: newStateRowsMeat});
        });
    }

    handleAddDairy = function(name, quan){
        // reference to this GroceryList
        let handle = this;
        // update component state...
        this.setState((prevState, props) => {

            // get rows from component's previous state
            let newStateRowsDairy = prevState.rowsDairy;
            // push a new ListItem to newStateRows
            newStateRowsDairy.push(<ListItem key={newStateRowsDairy.length} itemName={name} itemQuan={quan} myId={newStateRowsDairy.length} name="Added Item" onChange={handle.handleAddDairy.bind(handle)} />);

            // update GroceryList's state.rows = newStateRows
            return({rowsDairy: newStateRowsDairy});
        });
    }

    handleAddOther = function(name, quan){
        // reference to this GroceryList
        let handle = this;
        // update component state...
        this.setState((prevState, props) => {

            // get rows from component's previous state
            let newStateRowsOther = prevState.rowsOther;
            // push a new ListItem to newStateRows
            newStateRowsOther.push(<ListItem key={newStateRowsOther.length} itemName={name} itemQuan={quan} myId={newStateRowsOther.length} name="Added Item" onChange={handle.handleAddOther.bind(handle)} />);

            // update GroceryList's state.rows = newStateRows
            return({rowsOther: newStateRowsOther});
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
	    let newRowsFruitVeg = [];
        let newRowsDairy = [];
        let newRowsMeat = [];
        let newRowsOther = [];
        let handle = this;
			// Read FruitVeg from the database
			let listPathFruitVeg = firebase.auth().currentUser.uid + "/shopFruitVeg/";
			let refFruitVeg = new firebase.database().refFruitVeg(listPathFruitVeg);
            refFruitVeg.once("value")
                .then(function(snapshot){
                    snapshot.forEach(function(childSnapshot){
                        var itemName = childSnapshot.key;
                        var itemQuan = childSnapshot.val();
                        handle.handleAddFruitVeg(itemName, itemQuan);
                        console.log("we got: " + itemQuan + " " + itemName);
                    })
                })
            handle.handleAddEmptyItem();
			return({rowsFruitVeg: newRowsFruitVeg});

            // Read Dairy from the database
            let listPathDairy = firebase.auth().currentUser.uid + "/shopDairy/";
            let refDairy = new firebase.database().refDairy(listPathDairy);
            refDairy.once("value")
                .then(function(snapshot){
                    snapshot.forEach(function(childSnapshot){
                        var itemName = childSnapshot.key;
                        var itemQuan = childSnapshot.val();
                        handle.handleAddDairy(itemName, itemQuan);
                        console.log("we got: " + itemQuan + " " + itemName);
                    })
                })
            handle.handleAddEmptyItem();
            return({rowsDairy: newRowsDairy});

            // Read Meat from the database
            let listPathMeat = firebase.auth().currentUser.uid + "/shopMeat/";
            let refMeat = new firebase.database().refMeat(listPathMeat);
            refMeat.once("value")
                .then(function(snapshot){
                    snapshot.forEach(function(childSnapshot){
                        var itemName = childSnapshot.key;
                        var itemQuan = childSnapshot.val();
                        handle.handleAddMeat(itemName, itemQuan);
                        console.log("we got: " + itemQuan + " " + itemName);
                    })
                })
            handle.handleAddEmptyItem();
            return({rowsMeat: newRowsMeat});

            // Read Other from the database
            let listPathOther = firebase.auth().currentUser.uid + "/shopOther/";
            let refOther = new firebase.database().refOther(listPathOther);
            refOther.once("value")
                .then(function(snapshot){
                    snapshot.forEach(function(childSnapshot){
                        var itemName = childSnapshot.key;
                        var itemQuan = childSnapshot.val();
                        handle.handleAddOther(itemName, itemQuan);
                        console.log("we got: " + itemQuan + " " + itemName);
                    })
                })
            handle.handleAddEmptyItem();
            return({rowsOther: newRowsOther});
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
                                {this.state.rowsFruitVeg}
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
                                {this.state.rowsMeat}
                                <div>
                                    <h4 className="grocery-subheader">
                                        <span className="grocery-subheader-text">OTHER</span>
                                    </h4>
                                </div>
                                {this.state.rowsOther}
                            </div>
                        </div>
                    </div>
                </div>

				<div className="container-fluid">
					<div className="row">
                        <div className="col-xs-12">
                            <div className="grocery-button-row">
                                <button className="col-xs-6 btn btn-secondary" id="remove-button" onClick={this.deleteItems}>DELETE</button>
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
