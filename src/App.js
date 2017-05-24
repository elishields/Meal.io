//Import classes from React and Firebase
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as firebase from "firebase";

//Import classes for our pages
import { GroceryList } from './GroceryList.js';
import { Fridge } from './Fridge.js';
import { LandingPage } from './Landing-page.js';
import { EasterGroceryList } from './easter-egg-page.js';

//Import our resources
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

        this.clearGroceryList = this.clearGroceryList.bind(this);
        this.sendToFridge = this.sendToFridge.bind(this);
        this.readItems = this.readItems.bind(this);
        this.readFridge = this.readFridge.bind(this);

        let fridgeInitialFruitandveg = [];
        let fridgeInitialMeat = [];
        let fridgeInitialDairy = [];
        let fridgeInitialOther = [];

        this.state = {
            rows: {
                shop: {
                    Fruitandveg: [],
                    Meat: [],
                    Dairy: [],
                    Other: []
                },

                fridge: {
                    FruitVeg: [],
                    Meat: [],
                    Dairy: [],
                    Other: []
                }
            },

            fridgeRowsFruitandveg: fridgeInitialFruitandveg,
            fridgeRowsMeat: fridgeInitialMeat,
            fridgeRowsDairy: fridgeInitialDairy,
            fridgeRowsOther: fridgeInitialOther
        };
    }

    WrapGroceryList = (props) => {
        return (
            <GroceryList
            rowsFruitandveg={this.state.rows.shop.FruitVeg}
            rowsDairy={this.state.rows.shop.Dairy}
            rowsMeat={this.state.rows.shop.Meat}
            rowsOther={this.state.rows.shop.Other}
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
            readFridge={this.readFridge}
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
        this.listToFridge();
    }

    clearGroceryList = function() {

        let newRows = this.state.rows;
        newRows.shop = {
            FruitVeg: [],
            Dairy: [],
            Meat: [],
            Other: []
        }

        this.setState((prevState, props) => {
            return({rows: newRows});
        });
    }

    handleUpdateItem = function(sourcePage, sourceCategory, key, newName, newQuan) {
        console.log("UPDATING: " + newName + " x " + newQuan);
        if (newName !== "" && newQuan > 0) {

            let newRows = this.state.rows[sourcePage][sourceCategory];
            newRows[key] = {
                key: key,
                keyVal: key,
                page: sourcePage,
                category: sourceCategory,
                itemName: newName,
                itemQuan: newQuan,
                onBlur: this.handleUpdateItem.bind(this),
                onChange: this.handleAddItem.bind(this)
            }

            this.setState((prevState, props) => {
                rows: newRows;
            });

            this.writeItem(key, newName, newQuan, sourcePage + sourceCategory);
        }
    }

    handleAddItem = function(targetPage, targetCategory, name, quantity) {
        let handle = this;

        let newRows = this.state.rows;
        console.log("TARGET: " + targetPage + ", " + targetCategory)
        let target = this.state.rows[targetPage][targetCategory];
        let key = target.length;

        newRows[targetPage][targetCategory].push({
            key: key,
            keyVal: key,
            page: targetPage,
            category: targetCategory,
            itemName: name,
            itemQuan: quantity,
            onBlur: handle.handleUpdateItem.bind(this),
            onChange: handle.handleAddItem.bind(this)
        });

        this.setState((prevState, props) => {
            rows: newRows
        });
    }

    writeItem = function (key, name, quan, section){
        let path = firebase.auth().currentUser.uid;
        let data = {
            itemName : name,
            itemQuan : quan
        };
        return new firebase.database().ref(path + "/" + section + "/" + key).update(data);
    }

    readItems = function (callback){
        this.clearGroceryList();

        this.setState((prevState, props) => {
            let handle = this;
            let path = firebase.auth().currentUser.uid;

            //pull fruit and veg
            let ref = new firebase.database().ref(path + "/shopFruitVeg/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.val().itemName;
                    var itemQuan = childSnapshot.val().itemQuan;
                    handle.handleAddItem('shop', 'FruitVeg', itemName, itemQuan);
                })
                handle.handleAddItem('shop', 'FruitVeg', '', 1);
            }).then(callback);

            //pull dairy
            ref = new firebase.database().ref(path + "/shopDairy/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.val().itemName;
                    var itemQuan = childSnapshot.val().itemQuan;
                    handle.handleAddItem('shop', 'Dairy', itemName, itemQuan);
                })
                handle.handleAddItem('shop', 'Dairy', '', 1);
            }).then(callback);

            //pull meat
            ref = new firebase.database().ref(path + "/shopMeat/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.val().itemName;
                    var itemQuan = childSnapshot.val().itemQuan;
                    handle.handleAddItem('shop', 'Meat', itemName, itemQuan)
                })
                handle.handleAddItem('shop', 'Meat', '', 1);
            }).then(callback);

            //pull other
            ref = new firebase.database().ref(path + "/shopOther/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.val().itemName;
                    var itemQuan = childSnapshot.val().itemQuan;
                    handle.handleAddItem('shop', 'Other', itemName, itemQuan);
                })
                handle.handleAddItem('shop', 'Other', '', 1)
            }).then(callback);
        })
    }

    readFridge = function (callback){
        this.setState((prevState, props) => {
            let path = firebase.auth().currentUser.uid;
            var fridgeRowsFruitandveg = [];
            var fridgeRowsMeat = [];
            var fridgeRowsDairy = [];
            var fridgeRowsOther = [];

            //pull fruit and veg
            let ref = new firebase.database().ref(path + "/fridgeFruitVeg/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.val().itemName;
                    var itemQuan = childSnapshot.val().itemQuan;
                    fridgeRowsFruitandveg.push({itemName: itemName, itemQuan: itemQuan});
                    console.log("Pulled for fridge: " + itemQuan + " " + itemName);
                })
            }).then(callback);

            //pull dairy
            ref = new firebase.database().ref(path + "/fridgeDairy/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.val().itemName;
                    var itemQuan = childSnapshot.val().itemQuan;
                    fridgeRowsDairy.push({itemName: itemName, itemQuan: itemQuan});
                    console.log("Pulled for fridge: " + itemQuan + " " + itemName);
                })
            }).then(callback);

            //pull meat
            ref = new firebase.database().ref(path + "/fridgeMeat/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.val().itemName;
                    var itemQuan = childSnapshot.val().itemQuan;
                    fridgeRowsMeat.push({itemName: itemName, itemQuan: itemQuan});
                    console.log("Pulled for fridge: " + itemQuan + " " + itemName);
                })
            }).then(callback);

            //pull other
            ref = new firebase.database().ref(path + "/fridgeOther/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.val().itemName;
                    var itemQuan = childSnapshot.val().itemQuan;
                    fridgeRowsOther.push({itemName: itemName, itemQuan: itemQuan});
                    console.log("Pulled for fridge: " + itemQuan + " " + itemName);
                })
            }).then(callback);
            
            return({fridgeRowsFruitandveg: fridgeRowsFruitandveg,
                fridgeRowsMeat: fridgeRowsMeat,
                fridgeRowsDairy: fridgeRowsDairy,
                fridgeRowsOther: fridgeRowsOther});
        })

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
                                <Route path='/easter-egg-page' component={EasterGroceryList} />
                            </Switch>
                        </main>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
