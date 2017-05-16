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
	constructor(props) {
		super(props);

		this.deleteItems = this.deleteItems.bind(this);
		this.handleAddFruitVeg = this.handleAddFruitVeg.bind(this);
        this.handleAddDairy = this.handleAddDairy.bind(this);
        this.handleAddMeat = this.handleAddMeat.bind(this);
        this.handleAddOther = this.handleAddOther.bind(this);
		this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.readItems = this.readItems.bind(this);
        this.writeItems = this.writeItems.bind(this);
        this.listToFridge = this.listToFridge.bind(this);

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

    //adds new item to Frut & Veg in shoppling list display
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

    //adds new item to Meat in shoppling list display
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

    //adds new item to Dairy in shoppling list display
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

    //adds new item to Other in shoppling list display
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

    //removes items from database (not shopping list display)
	handleRemoveItem = function(index) {
        //TODO : Tony add code to remove items from database
	}

	//removes items from shopping list display (not database)
	deleteItems = function() {
		let rows = this.state.rows;
		let safe=0;

		for(let i=0; i<rows.length; i++, safe++) {
			if(document.getElementById("check-" + i).checked) {
				this.handleRemoveItem(i);
			}
		}
	}

    /*
     *  Writes items in shopping list display to the database
     *  @param name is a string, the name of item being added
     *  @param quan is an integer, the quantity of the item being added
     *  @Param section is a string, the child in the database where info will be written to
     */
	writeItems = function (name, quan, section){
        let path = firebase.auth().currentUser.uid;
        let data = {
            [name]: quan
        };
        return new firebase.database().ref(path + "/shop" + section).update(data);
    }

    //sends all the items in the grocery list db to the fridge db
    listToFridge = function () {
        let path = firebase.auth().currentUser.uid;
        let ref = new firebase.database().ref(path + "/shopFruitVeg/");
        var fruitVeg = {};
        ref.once("value")
            .then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.key;
                    var itemQuan = childSnapshot.val();
                    fruitVeg[itemName] = itemQuan;

                })
                firebase.database().ref(path + "/fridgeFruitVeg").update(fruitVeg);
            })
        ref = new firebase.database().ref(path + "/shopDairy/");
        var dairy = {};
        ref.once("value")
            .then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.key;
                    var itemQuan = childSnapshot.val();
                    dairy[itemName] = itemQuan;

                })
                firebase.database().ref(path + "/fridgeDairy").update(dairy);
            })
        ref = new firebase.database().ref(path + "/shopMeat/");
        var meat = {};
        ref.once("value")
            .then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.key;
                    var itemQuan = childSnapshot.val();
                    meat[itemName] = itemQuan;

                })
                firebase.database().ref(path + "/fridgeMeat").update(meat);
            })
        ref = new firebase.database().ref(path + "/shopOther/");
        var other = {};
        ref.once("value")
            .then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.key;
                    var itemQuan = childSnapshot.val();
                    other[itemName] = itemQuan;

                })
                firebase.database().ref(path + "/fridgeOther").update(other);
            })



    }

	//reads database and populates shopping list
	readItems = function() {
		this.setState((prevState, props) => {
	    let newRowsFruitVeg = [];
        let newRowsDairy = [];
        let newRowsMeat = [];
        let newRowsOther = [];
        let handle = this;
        let path = firebase.auth().currentUser.uid;
			// Read FruitVeg from the database
			let ref = new firebase.database().ref(path + "/shopFruitVeg/");
            ref.once("value")
                .then(function(snapshot){
                    snapshot.forEach(function(childSnapshot){
                        var itemName = childSnapshot.key;
                        var itemQuan = childSnapshot.val();
                        handle.handleAddFruitVeg(itemName, itemQuan);
                        console.log("we got: " + itemQuan + " " + itemName);
                    })
                })
            handle.handleAddFruitVeg();


            // Read Dairy from the database
            ref = new firebase.database().ref(path + "/shopDairy/");
            ref.once("value")
                .then(function(snapshot){
                    snapshot.forEach(function(childSnapshot){
                        var itemName = childSnapshot.key;
                        var itemQuan = childSnapshot.val();
                        handle.handleAddDairy(itemName, itemQuan);
                        console.log("we got: " + itemQuan + " " + itemName);
                    })
                })
            handle.handleAddDairy();


            // Read Meat from the database
            ref = new firebase.database().ref(path + "/shopMeat/");
            ref.once("value")
                .then(function(snapshot){
                    snapshot.forEach(function(childSnapshot){
                        var itemName = childSnapshot.key;
                        var itemQuan = childSnapshot.val();
                        handle.handleAddMeat(itemName, itemQuan);
                        console.log("we got: " + itemQuan + " " + itemName);
                    })
                })
            handle.handleAddMeat();


            // Read Other from the database
            ref = new firebase.database().ref(path + "/shopOther/");
            ref.once("value")
                .then(function(snapshot){
                    snapshot.forEach(function(childSnapshot){
                        var itemName = childSnapshot.key;
                        var itemQuan = childSnapshot.val();
                        handle.handleAddOther(itemName, itemQuan);
                        console.log("we got: " + itemQuan + " " + itemName);
                    })
                })
            handle.handleAddOther();


            return({rowsFruitVeg: newRowsFruitVeg,
                rowsDairy: newRowsDairy,
                rowsMeat: newRowsMeat,
                rowsOther: newRowsOther});
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
                                {this.state.rowsDairy}
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
                                <button className="col-xs-6 btn btn-secondary" id="add-to-fridge-button" onClick={this.listToFridge}>ADD TO FRIDGE</button>
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
