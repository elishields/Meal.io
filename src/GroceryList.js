import React, { Component } from 'react';
import '../src/bootstrap-3.3.7-dist/css/bootstrap.css';
import '../src/bootstrap-3.3.7-dist/css/bootstrap-theme.css';
import './App.css';

class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = props.onClick;
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
		this.state = {amount: 1, onChange: props.onChange};
		
		this.clearOnChange = this.clearOnChange.bind(this);
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}
	
	clearOnChange = function() {
		this.state.onChange();
		this.state.onChange = () => {};
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
			<div className="input-group" id="grocery-item">
				<span className="input-group-addon" id="grocery-item-quantity">{this.state.amount}</span>
				    <input type="text" className="form-control" id="grocery-item-input" placeholder="enter an item" 
				    	onChange={this.clearOnChange} aria-describedby="item name"></input>
				<span className="input-group-addon" id="grocery-item-check-bg">
					<input type="checkbox" id="grocery-item-check" aria-label="confirm item"></input>
				</span>
			</div>
		);
	}
}

export class GroceryList extends Component {
	constructor(props) {
		super(props);
		
		let rows = [];
		
		rows.push(<ListItem key={0} onChange={this.handleAddItem.bind(this)} name="NAME" />);
		
		let addButton = (<AddItem onClick={this.handleAddItem.bind(this)}/>);
		
		this.state = {rows: rows, addButton: addButton};
	}
	
	handleAddItem = function() {
		let handle = this;
		this.setState((prevState, props) => {
			let newStateRows = prevState.rows;
			newStateRows.push(<ListItem name="Added Item" onChange={handle.handleAddItem.bind(handle)} key={newStateRows.length} />);
			return({rows: newStateRows});
		});
		
		this.rebuildList();
	}
	
	handleRemoveItem = function(index) {
		this.setState((prevState, props) => {
			let newStateRows = prevState.rows;
			newStateRows.splice(index, 1);
			return({rows: newStateRows});
		});
	}

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
	
  render() {
    return (
      <div className="GroceryList">
        {this.state.rows}
      </div>
    );
  }
}

export default GroceryList;
