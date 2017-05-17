//Import classes from React
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Import classes for our pages

import { ListItem, GroceryList } from './GroceryList.js';
import { Fridge } from './Fridge.js';
import { LandingPage } from './Landing-page.js';

//Import our resources
import { AffiliatedPage } from './affiliated-page';
import { AboutusPage } from './about-us';

//Import our styles
import './bootstrap-3.3.7-dist/css/bootstrap.css';
import './bootstrap-3.3.7-dist/css/bootstrap-theme.css';
// App.css is imported after bootstrap.css so that App.css rules have primacy
import './App.css';

/*
 * App: this is the 'entry point' for our app. It is loaded in index.js
 */
class App extends Component {

    constructor(props) {
        super(props);

        this.handleUpdateFruitandveg = this.handleUpdateFruitandveg.bind(this);

        let listInitialFruitandveg = [];
        listInitialFruitandveg.push({
            key: 0,
            keyVal: 0,
            itemName: "",
            itemQuan: 1,
            onBlur: this.handleUpdateFruitandveg.bind(this),
            onChange: this.handleAddListFruitandveg.bind(this)
        });

        let listInitialMeat = [];
        listInitialMeat.push(<ListItem key={0} myId={"M" + 0} itemQuan={1} onChange={this.handleAddListMeat.bind(this)} name="NAME" />);

        let listInitialDairy = [];
        listInitialDairy.push(<ListItem key={0} myId={"D" + 0} itemQuan={1} onChange={this.handleAddListDairy.bind(this)} name="NAME" />);

        let listInitialOther = [];
        listInitialOther.push(<ListItem key={0} myId={"O" + 0} itemQuan={1} onChange={this.handleAddListOther.bind(this)} name="NAME" />);

        this.state = {
            listRowsFruitandveg: listInitialFruitandveg,
            listRowsMeat: listInitialMeat,
            listRowsDairy: listInitialDairy,
            listRowsOther: listInitialOther
        };
    }

    WrapGroceryList = (props) => {
        return (
            <GroceryList
            rowsFruitandveg={this.state.listRowsFruitandveg}
            rowsDairy={this.state.listRowsDairy}
            rowsMeat={this.state.listRowsMeat}
            rowsOther={this.state.listRowsOther}
            {...props}
            />
        );
    }

    handleUpdateFruitandveg = function(key, newName, newQuan) {
        console.log("updating item  " + key)

        this.setState((prevState, props) => {
            let newRowsFV = prevState.listRowsFruitandveg;

            newRowsFV[key] = {
                key: key,
                keyVal: key,
                itemName: newName,
                itemQuan: newQuan,
                onBlur: this.handleUpdateFruitandveg.bind(this),
                onChange: this.handleAddListFruitandveg.bind(this)
            }
            
            console.log(newRowsFV[key])
            return({listRowsFruitandveg: newRowsFV});
        });
    }

    handleAddListFruitandveg = function(name, quantity) {
        
        console.log("adding new item..")
        // reference to this component
        let handle = this;

        this.setState((prevState, props) => {
            let newRowsFV = prevState.listRowsFruitandveg;

            newRowsFV.push({
                key: newRowsFV.length,
                keyVal: newRowsFV.length,
                itemName: name,
                itemQuan: quantity,
                onBlur: this.handleUpdateFruitandveg.bind(this),
                onChange: this.handleAddListFruitandveg.bind(this)
            });
            
            console.log(newRowsFV[newRowsFV.length-1])
            return({listRowsFruitandveg: newRowsFV});
        });
    }

    handleAddListMeat = function(name, quantity) {
        
        // reference to this component
        let handle = this;

        // update component state...
        this.setState((prevState, props) => {

            // get rows from component's previous state
            let newStateListRowsMeat = prevState.listRowsMeat;

            // push a new ListItem to newStateRows
            newStateListRowsMeat.push(
                <ListItem key={newStateListRowsMeat.length}
                    itemName={name}
                    itemQuan={quantity}
                    myId={"M" + newStateListRowsMeat.length}
                    name="Added Item"
                    onChange={handle.handleAddListMeat.bind(handle)}
                />);

            // update GroceryList's state.rows = newStateRows
            return({listRowsMeat: newStateListRowsMeat});
        });
    }

    handleAddListDairy = function(name, quantity) {

        // reference to this component
        let handle = this;

        // update component state...
        this.setState((prevState, props) => {

            // get rows from component's previous state
            let newStateListRowsDairy = prevState.listRowsDairy;

            // push a new ListItem to newStateRows
            newStateListRowsDairy.push(
                <ListItem key={newStateListRowsDairy.length}
                    itemName={name}
                    itemQuan={quantity}
                    myId={"D" + newStateListRowsDairy.length}
                    name="Added Item"
                    onChange={handle.handleAddListDairy.bind(handle)}
                />);

            // update GroceryList's state.rows = newStateRows
            return({listRowsDairy: newStateListRowsDairy});
        });
    }

    handleAddListOther = function(name, quantity) {
        // reference to this component
        let handle = this;

        // update component state...
        this.setState((prevState, props) => {

            // get rows from component's previous state
            let newStateListRowsOther = prevState.listRowsOther;

            // push a new ListItem to newStateRows
            newStateListRowsOther.push(
                <ListItem key={newStateListRowsOther.length}
                    itemName={name}
                    itemQuan={quantity}
                    myId={"O" + newStateListRowsOther.length}
                    name="Added Item"
                    onChange={handle.handleAddListOther.bind(handle)}
                />);

            // update GroceryList's state.rows = newStateRows
            return({listRowsOther: newStateListRowsOther});
        });
    }

    /*
    *  render() defines the HTML template for this class.
    */
    render() {
        return (
            <div className="app">
                <div id="bootstrap-overrides">
                    <div className="container-fluid">

                        <main>
                            <Switch>
                                <Route exact path='/' component={LandingPage} />
                                <Route path='/list' render={this.WrapGroceryList}/>
                                <Route path='/fridge' component={Fridge} />
                                <Route path='/affiliated-page' component={AffiliatedPage} />
                                <Route path='/about-us' component={AboutusPage} />
                            </Switch>
                        </main>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
