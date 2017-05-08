import React, { Component } from 'react';
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';

class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.pushToItems = this.pushToItems.bind(this);
		this.onClick = props.onClick;
	}
	
	pushToItems = function() {
		//alert("add item");
	}

	render() {
		return(
			<button type="button" className="btn btn-default" onClick={this.onClick}>
				Add Item
			</button>
		);
	}
}

class ListItem extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {amount: 1};
		
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}
	
	increment = function() {
		this.setState((prevState, props) => {
			return({amount: prevState.amount + 1});
		});
	}
	
	decrement = function() {
		this.setState((prevState, props) => {
			return({amount: prevState.amount - 1});
		});
	}
	
	getAmount = function() {
		return(this.state.amount);
	}
	
	render() {
		return (
			<div className="input-group">
				<span className="input-group-addon">{this.state.amount}</span>
				<input type="text" className="form-control" placeholder="item name" aria-describedby="item name"></input>
				<span className="input-group-addon">
					<input type="checkbox" aria-label="confirm item"></input>
				</span>
			</div>
		);
	}
}

export class GroceryList extends Component {
	constructor(props) {
		super(props);
		let rows = [];
		
		for(let i=0; i<3; i++) {
			rows.push(<ListItem name="NAME" />);
		}
		
		let addButton = (<AddItem onClick={this.handleAddItem.bind(this)}/>);
		
		this.state = {rows: rows, addButton: addButton};
	}
	
	handleAddItem = function() {
		this.setState((prevState, props) => {
			let newStateRows = prevState.rows;
			newStateRows.push(<ListItem name="Added Item" 
			ref={instance => {this.child = instance}} 
			/>);
			return({rows: newStateRows});
		});
		
		this.rebuildList();
	}
	
	handleRemoveItem = function(index) {
		alert("removing item at index " + index);

		this.setState((prevState, props) => {
			let newStateRows = prevState.rows;
			newStateRows.splice(index, 1);
			return({rows: newStateRows});
		});
	}

	rebuildList = function() {
		for(let i=0; i<this.state.rows.length; i++) {
			alert(this.state.rows[i].getAmount());
			
			if(this.state.rows[i].state.amount === 0) {
				this.handleRemoveItem(i);
				i--;
			}
		}
	}
	
  render() {
    return (
      <div className="GroceryList">
        {this.state.rows}
        {this.state.addButton}
      </div>
    );
  }
}

export default GroceryList;
