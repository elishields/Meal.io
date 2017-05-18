//Import classes from React and Firebase
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as firebase from "firebase";

//Import classes for our pages
import { GroceryList } from './GroceryList.js';
import { Fridge } from './Fridge.js';
import { LandingPage } from './Landing-page.js';
import { AffiliatedPage } from './affiliated-page';
import { AboutusPage } from './about-us';
import { MealPlan } from './Meal-plan';

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
        this.clearGroceryList = this.clearGroceryList.bind(this);
        this.sendToFridge = this.sendToFridge.bind(this);
        this.readItems = this.readItems.bind(this);

        let listInitialFruitandveg = [];
        let listInitialMeat = [];
        let listInitialDairy = [];
        let listInitialOther = [];

        let fridgeInitialFruitandveg = [];
        let fridgeInitialMeat = [];
        let fridgeInitialDairy = [];
        let fridgeInitialOther = [];

        this.state = {
            listRowsFruitandveg: listInitialFruitandveg,
            listRowsMeat: listInitialMeat,
            listRowsDairy: listInitialDairy,
            listRowsOther: listInitialOther,

            fridgeRowsFruitandveg: fridgeInitialFruitandveg,
            fridgeRowsMeat: fridgeInitialMeat,
            fridgeRowsDairy: fridgeInitialDairy,
            fridgeRowsOther: fridgeInitialOther
        };
    }

    WrapGroceryList = (props) => {
        return (
            <GroceryList
            rowsFruitandveg={this.state.listRowsFruitandveg}
            rowsDairy={this.state.listRowsDairy}
            rowsMeat={this.state.listRowsMeat}
            rowsOther={this.state.listRowsOther}
            readItems={this.readItems}
            sendToFridge={this.sendToFridge}
            {...props}
            />
        );
    }

    WrapFridge = (props) => {
        return (
            <Fridge
            rowsFruitandveg={this.state.fridgeRowsFruitandveg}
            rowsMeat={this.state.fridgeRowsMeat}
            rowsDairy={this.state.fridgeRowsDairy}
            rowsOther={this.state.fridgeRowsOther}
            {...props}
            />
        );
    }

    sendToFridge = function() {
        console.log("sendToFridge called");

        this.setState((prevState, props) => {

            let newRowsFV = prevState.fridgeRowsFruitandveg;
            let newRowsM = prevState.fridgeRowsMeat;
            let newRowsD = prevState.fridgeRowsDairy;
            let newRowsO = prevState.fridgeRowsOther;

            prevState.listRowsFruitandveg.forEach(function(item) {
                if (document.getElementById("check-F" + item.key).checked) {
                    console.log("added " + item.itemName);
                    newRowsFV.push(item);
                }
            });

            console.log(prevState.listRowsDairy.length)
            prevState.listRowsDairy.forEach(function(item) {
                console.log("check-D" + item.key)
                if (document.getElementById("check-D" + item.key).checked) {
                    console.log("added " + item.itemName);
                    newRowsD.push(item);
                }
            });

            prevState.listRowsMeat.forEach(function(item) {
                if (document.getElementById("check-M" + item.key).checked) {
                    console.log("added " + item.itemName);
                    newRowsM.push(item);
                }
            });

            prevState.listRowsOther.forEach(function(item) {
                if (document.getElementById("check-O" + item.key).checked) {
                    console.log("added " + item.itemName);
                    newRowsO.push(item);
                }
            });

            return({fridgeRowsFruitandveg: newRowsFV,
                fridgeRowsMeat: newRowsM,
                fridgeRowsDairy: newRowsD,
                fridgeRowsOther: newRowsO});
        });

        console.log("fridge rows: " + this.state.fridgeRowsFruitandveg)
        console.log("sendToFridge returning");
    }

    clearGroceryList = function() {
        this.setState((prevState, props) => {
            return({listRowsFruitandveg: [],
                listRowsMeat: [],
                listRowsDairy: [],
                listRowsOther: []});
        });
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
                onBlur: handle.handleUpdateFruitandveg.bind(handle),
                onChange: handle.handleAddListFruitandveg.bind(handle)
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
                onBlur: handle.handleUpdateMeat.bind(this),
                onChange: handle.handleAddListMeat.bind(this)
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
                onBlur: handle.handleUpdateDairy.bind(this),
                onChange: handle.handleAddListDairy.bind(this)
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
                onBlur: handle.handleUpdateOther.bind(this),
                onChange: handle.handleAddListOther.bind(this)
            });
            
            console.log(newRowsFV[newRowsFV.length-1])
            return({listRowsOther: newRowsFV});
        });
    }

    writeItems = function (name, quan, section){
        let path = firebase.auth().currentUser.uid;
        let data = {
            [name] : quan
        };
        return new firebase.database().ref(path + "/" + section + "/").update(data);
    }

    readItems = function (){
        this.clearGroceryList();

        this.setState((prevState, props) => {
            let handle = this;
            let path = firebase.auth().currentUser.uid;

            //pull fruit and veg
            let ref = new firebase.database().ref(path + "/shopFruitVeg/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.key;
                    var itemQuan = childSnapshot.val();
                    handle.handleAddListFruitandveg(itemName, itemQuan);
                    console.log("Pulled: " + itemQuan + " " + itemName);

                })
            })

            //pull meat
            ref = new firebase.database().ref(path + "/shopMeat/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.key;
                    var itemQuan = childSnapshot.val();
                    handle.handleAddListMeat(itemName, itemQuan);
                    console.log("Pulled: " + itemQuan + " " + itemName);
                })
            })

            //pull dairy
            ref = new firebase.database().ref(path + "/shopDairy/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.key;
                    var itemQuan = childSnapshot.val();
                    handle.handleAddListDairy(itemName, itemQuan);
                    console.log("Pulled: " + itemQuan + " " + itemName);
                })
            })

            //pull other
            ref = new firebase.database().ref(path + "/shopOther/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.key;
                    var itemQuan = childSnapshot.val();
                    handle.handleAddListOther(itemName, itemQuan);
                    console.log("Pulled: " + itemQuan + " " + itemName);
                })
            })

            handle.handleAddListFruitandveg("", 1);
            handle.handleAddListMeat("", 1);
            handle.handleAddListDairy("", 1);
            handle.handleAddListOther("", 1);
        })
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
                                <Route path='/fridge' render={this.WrapFridge} />
                                <Route path='/meal-plan' component={MealPlan} />
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
