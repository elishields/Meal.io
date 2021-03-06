// Import classes from React
import React, { Component } from 'react';
import { Header, Footer, Tips } from './Navigation.js';

// Import style
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';
import { Link } from 'react-router-dom';

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
        this.state = {
            itemName: props.itemName,
            amount: props.itemQuan,
            onChange: props.onChange,
            isLast: props.isLast
        };

        this.checkId = "check-" + this.props.myId;

        // Bind reference to 'this' to member functions
        this.fireOnChange = this.fireOnChange.bind(this);
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
                onChange={this.fireOnChange}
                onBlur={() => this.props.onBlur(this.props.page, this.props.category,
                    this.props.keyVal, document.getElementById("grocery-item-input" + this.props.myId).value,
                    parseInt(document.getElementById("grocery-item-quantity" + this.props.myId).value))}
                aria-describedby="item name">
            </input>
        );
    }
    
    /*
     *  fires onChange function and then clears it.
     */
    fireOnChange = function () {
        if (this.state.isLast) {
            this.state.onChange(this.props.page, this.props.category, '', 1, true, this.props.keyVal + 1);
            this.props.addHandler();
            this.clearOnChange();
        }
    }

    clearOnChange = function () {
        this.setState({onChange: () => {}});
    }

    /*
     *  restores onChange function
     */
    restoreOnChange = function () {
        this.setState({onChange: this.props.onChange});
    }
    
    updateName = function() {
        this.setState((prevState, props) => {
            return({itemName: document.getElementById("grocery-item-input" + this.props.myId).value});
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

                        <input type="number"
                            className="form-control"
                            id={"grocery-item-quantity" + this.props.myId}
                            defaultValue={this.props.itemQuan}
                            onBlur={() => this.props.onBlur(this.props.keyVal, document.getElementById("grocery-item-input" + this.props.myId).value,
                                parseInt(document.getElementById("grocery-item-quantity" + this.props.myId).value))}>
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

        this.handleAddFruitandveg = this.handleAddFruitandveg.bind(this);
        this.handleAddMeat = this.handleAddMeat.bind(this);
        this.handleAddDairy = this.handleAddDairy.bind(this);
        this.handleAddOther = this.handleAddOther.bind(this);
        this.deleteFromShop = this.deleteFromShop.bind(this);
        this.buildPage = this.buildPage.bind(this);

        let rowsFruitandveg = [];
        let rowsMeat = [];
        let rowsDairy = [];
        let rowsOther = [];

        this.state = {

            rows: {
                FruitVeg: [],
                Meat: [],
                Dairy: [],
                Other: []
            },

            rowsFruitandveg: rowsFruitandveg,
            rowsMeat: rowsMeat,
            rowsDairy: rowsDairy,
            rowsOther: rowsOther
        };
    }

    componentWillMount() {
        this.buildPage();
    }

    buildPage() {
        this.props.readItems('shop', this.buildRows.bind(this));
    }

    handleBuildItem = function(category) {
        let handle = this;

        let srcRows = this.props.rows[category];
        let newRows = this.state.rows[category];

        let item = srcRows[srcRows.length - 1];

        if (srcRows.length !== newRows.length) {
            newRows.push(
                <ListItem key={item.key}
                    keyVal={item.key}
                    myId={category + item.key}
                    isLast={item.isLast}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    addHandler={handle.handleBuildItem}
                    page={item.page}
                    category={item.category}/>
            )
        }
    }

    handleAddFruitandveg = function() {
        this.setState((prevState, props) => {
            let handle = this;

            let srcRows = props.rowsFruitandveg;
            let itemRows = prevState.rowsFruitandveg;

            let item = srcRows[srcRows.length - 1];

            if (srcRows.length !== itemRows.length) {
                itemRows.push(
                    <ListItem key={item.key}
                        keyVal={item.key}
                        myId={"F" + item.key}
                        isLast={item.isLast}
                        itemName={item.itemName}
                        itemQuan={item.itemQuan}
                        onBlur={item.onBlur}
                        onChange={item.onChange}
                        addHandler={handle.handleAddFruitandveg}
                        page={item.page}
                        category={item.category}/>
                )
            }

            return({rowsFruitandveg: itemRows});
        });
    }

    handleAddMeat = function() {
        this.setState((prevState, props) => {
            let handle = this;

            let srcRows = props.rowsMeat;
            let itemRows = prevState.rowsMeat;

            let item = srcRows[srcRows.length - 1];

            if (srcRows.length !== itemRows.length) {
                itemRows.push(
                    <ListItem key={item.key}
                        keyVal={item.key}
                        myId={"M" + item.key}
                        isLast={item.isLast}
                        itemName={item.itemName}
                        itemQuan={item.itemQuan}
                        onBlur={item.onBlur}
                        onChange={item.onChange}
                        addHandler={handle.handleAddMeat}
                        page={item.page}
                        category={item.category}/>
                )
            }
            
            return({rowsMeat: itemRows});
        });
    }

    handleAddDairy = function() {
        this.setState((prevState, props) => {
            let handle = this;

            let srcRows = props.rowsDairy;
            let itemRows = prevState.rowsDairy;

            let item = srcRows[srcRows.length - 1];

            if (srcRows.length !== itemRows.length) {
                itemRows.push(
                    <ListItem key={item.key}
                        keyVal={item.key}
                        myId={"D" + item.key}
                        isLast={item.isLast}
                        itemName={item.itemName}
                        itemQuan={item.itemQuan}
                        onBlur={item.onBlur}
                        onChange={item.onChange}
                        addHandler={handle.handleAddDairy}
                        page={item.page}
                        category={item.category}/>
                )
            }
            
            return({rowsDairy: itemRows});
        });
    }

    handleAddOther = function() {
        this.setState((prevState, props) => {
            let handle = this;

            let srcRows = props.rowsOther;
            let itemRows = prevState.rowsOther;

            let item = srcRows[srcRows.length - 1];

            if (srcRows.length !== itemRows.length) {
                itemRows.push(
                    <ListItem key={item.key}
                        keyVal={item.key}
                        myId={"O" + item.key}
                        isLast={item.isLast}
                        itemName={item.itemName}
                        itemQuan={item.itemQuan}
                        onBlur={item.onBlur}
                        onChange={item.onChange}
                        addHandler={handle.handleAddOther}
                        page={item.page}
                        category={item.category}/>
                )
            }
            
            return({rowsOther: itemRows});
        });
    }

    buildRows = function() {
        let handle = this;
        let rowsFruitandveg = [];
        this.props.rowsFruitandveg.forEach(function(item) {
            rowsFruitandveg.push(
                <ListItem key={item.key}
                    keyVal={item.key}
                    myId={"F" + item.key}
                    isLast={item.isLast}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    addHandler={handle.handleAddFruitandveg}
                    page={item.page}
                    category={item.category}/>
            )
        });

        let rowsMeat = [];
        this.props.rowsMeat.forEach(function(item) {
            rowsMeat.push(
                <ListItem key={item.key}
                    keyVal={item.key}
                    myId={"M" + item.key}
                    isLast={item.isLast}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    addHandler={handle.handleAddMeat}
                    page={item.page}
                    category={item.category}/>
            )
        });

        let rowsDairy = [];
        this.props.rowsDairy.forEach(function(item) {
            rowsDairy.push(
                <ListItem key={item.key}
                    keyVal={item.key}
                    myId={"D" + item.key}
                    isLast={item.isLast}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    addHandler={handle.handleAddDairy}
                    page={item.page}
                    category={item.category}/>
            )
        });

        let rowsOther = [];
        this.props.rowsOther.forEach(function(item) {
            rowsOther.push(
                <ListItem key={item.key}
                    keyVal={item.key}
                    myId={"O" + item.key}
                    isLast={item.isLast}
                    itemName={item.itemName}
                    itemQuan={item.itemQuan}
                    onBlur={item.onBlur}
                    onChange={item.onChange}
                    addHandler={handle.handleAddOther}
                    page={item.page}
                    category={item.category}/>
            )
        });

        this.setState({rowsFruitandveg: rowsFruitandveg,
                rowsMeat: rowsMeat,
                rowsDairy: rowsDairy,
                rowsOther: rowsOther
        });
    }

    deleteFromShop = function(){
        let handle = this;

        handle.props.rowsFruitandveg.forEach(function(item){
            if (document.getElementById("check-F" + item.key).checked) {
                handle.props.deleteItems(item.key, "shopFruitVeg", handle.mountPage);
            }
        })

        handle.props.rowsMeat.forEach(function(item){
            if (document.getElementById("check-M" + item.key).checked) {
                handle.props.deleteItems(item.key, "shopMeat", handle.mountPage);
            }
        })

        handle.props.rowsDairy.forEach(function(item){
            if (document.getElementById("check-D" + item.key).checked) {
                handle.props.deleteItems(item.key, "shopDairy", handle.mountPage);
            }
        })

        handle.props.rowsOther.forEach(function(item){
            if (document.getElementById("check-O" + item.key).checked) {
                handle.props.deleteItems(item.key, "shopOther", handle.mountPage);
            }
        })
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
                        <div className="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
                            <h3 className="hidden-page-header" id="hidden-header-all">
								<span className="hidden-page-title-text">
                                    <Link to="/easter-egg-page">
                                        x
                                    </Link></span>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12" id="content-section">
                            <div id="grocery-subheadings">
                                <div>
                                    <h4 className="subheader">
                                        <span className="subheader-text">FRUIT & VEG</span>
                                    </h4>
                                </div>
                                <p className="item-input-row">{this.state.rowsFruitandveg}</p>
                                <div>
                                    <h4 className="subheader">
                                        <span className="subheader-text">DAIRY</span>
                                    </h4>
                                </div>
                                <p className="item-input-row">{this.state.rowsDairy}</p>
                                <div>
                                    <h4 className="subheader">
                                        <span className="subheader-text">MEAT</span>
                                    </h4>
                                </div>
                                <p className="item-input-row">{this.state.rowsMeat}</p>
                                <div>
                                    <h4 className="subheader">
                                        <span className="subheader-text">OTHER</span>
                                    </h4>
                                </div>
                                <p className="item-input-row">{this.state.rowsOther}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="grocery-button-row" id="grocery-button-row">
                                <button className="col-xs-6 btn btn-secondary" id="remove-button" onClick={() => this.props.deleteItems(this.buildPage)}>DELETE</button>
                                <button className="col-xs-6 btn btn-secondary" id="add-to-fridge-button" onClick={this.props.sendToFridge}>ADD TO FRIDGE</button>
                            </div>
                        </div>
                    </div>
                    <Link to="/fridge"><div id="DoNotTouchAgain"></div></Link>
                </div>

                <Footer myprop="" />
            </div>
        );
    }
}

export default GroceryList;
