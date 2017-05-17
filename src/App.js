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
        this.handleUpdateMeat = this.handleUpdateMeat.bind(this);
        this.handleUpdateDairy = this.handleUpdateDairy.bind(this);
        this.handleUpdateOther = this.handleUpdateOther.bind(this);

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
        listInitialMeat.push({
            key: 0,
            keyVal: 0,
            itemName: "",
            itemQuan: 1,
            onBlur: this.handleUpdateMeat.bind(this),
            onChange: this.handleAddListMeat.bind(this)
        });

        let listInitialDairy = [];
        listInitialDairy.push({
            key: 0,
            keyVal: 0,
            itemName: "",
            itemQuan: 1,
            onBlur: this.handleUpdateDairy.bind(this),
            onChange: this.handleAddListDairy.bind(this)
        });

        let listInitialOther = [];
        listInitialOther.push({
            key: 0,
            keyVal: 0,
            itemName: "",
            itemQuan: 1,
            onBlur: this.handleUpdateOther.bind(this),
            onChange: this.handleAddListOther.bind(this)
        });

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

    handleUpdateMeat = function(key, newName, newQuan) {
        console.log("updating item  " + key)

        this.setState((prevState, props) => {
            let newRowsFV = prevState.listRowsMeat;

            newRowsFV[key] = {
                key: key,
                keyVal: key,
                itemName: newName,
                itemQuan: newQuan,
                onBlur: this.handleUpdateMeat.bind(this),
                onChange: this.handleAddListMeat.bind(this)
            }
            
            console.log(newRowsFV[key])
            return({listRowsMeat: newRowsFV});
        });
    }

    handleAddListMeat = function(name, quantity) {
        
        console.log("adding new item..")
        // reference to this component
        let handle = this;

        this.setState((prevState, props) => {
            let newRowsFV = prevState.listRowsMeat;

            newRowsFV.push({
                key: newRowsFV.length,
                keyVal: newRowsFV.length,
                itemName: name,
                itemQuan: quantity,
                onBlur: this.handleUpdateMeat.bind(this),
                onChange: this.handleAddListMeat.bind(this)
            });
            
            console.log(newRowsFV[newRowsFV.length-1])
            return({listRowsMeat: newRowsFV});
        });
    }

    handleUpdateDairy = function(key, newName, newQuan) {
        console.log("updating item  " + key)

        this.setState((prevState, props) => {
            let newRowsFV = prevState.listRowsDairy;

            newRowsFV[key] = {
                key: key,
                keyVal: key,
                itemName: newName,
                itemQuan: newQuan,
                onBlur: this.handleUpdateDairy.bind(this),
                onChange: this.handleAddListDairy.bind(this)
            }
            
            console.log(newRowsFV[key])
            return({listRowsDairy: newRowsFV});
        });
    }

    handleAddListDairy = function(name, quantity) {
        
        console.log("adding new item..")
        // reference to this component
        let handle = this;

        this.setState((prevState, props) => {
            let newRowsFV = prevState.listRowsDairy;

            newRowsFV.push({
                key: newRowsFV.length,
                keyVal: newRowsFV.length,
                itemName: name,
                itemQuan: quantity,
                onBlur: this.handleUpdateDairy.bind(this),
                onChange: this.handleAddListDairy.bind(this)
            });
            
            console.log(newRowsFV[newRowsFV.length-1])
            return({listRowsDairy: newRowsFV});
        });
    }

    handleUpdateOther = function(key, newName, newQuan) {
        console.log("updating item  " + key)

        this.setState((prevState, props) => {
            let newRowsFV = prevState.listRowsOther;

            newRowsFV[key] = {
                key: key,
                keyVal: key,
                itemName: newName,
                itemQuan: newQuan,
                onBlur: this.handleUpdateOther.bind(this),
                onChange: this.handleAddListOther.bind(this)
            }
            
            console.log(newRowsFV[key])
            return({listRowsOther: newRowsFV});
        });
    }

    handleAddListOther = function(name, quantity) {
        
        console.log("adding new item..")
        // reference to this component
        let handle = this;

        this.setState((prevState, props) => {
            let newRowsFV = prevState.listRowsOther;

            newRowsFV.push({
                key: newRowsFV.length,
                keyVal: newRowsFV.length,
                itemName: name,
                itemQuan: quantity,
                onBlur: this.handleUpdateOther.bind(this),
                onChange: this.handleAddListOther.bind(this)
            });
            
            console.log(newRowsFV[newRowsFV.length-1])
            return({listRowsOther: newRowsFV});
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
                                <Route path='/list' render={this.WrapGroceryList} />
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
