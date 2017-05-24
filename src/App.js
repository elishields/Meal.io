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

        this.clearPage = this.clearPage.bind(this);
        this.sendToFridge = this.sendToFridge.bind(this);
        this.readItems = this.readItems.bind(this);

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
            rows={this.state.rows.shop}
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
            rowsFruitandveg={this.state.rows.fridge.FruitVeg}
            rowsMeat={this.state.rows.fridge.Meat}
            rowsDairy={this.state.rows.fridge.Dairy}
            rowsOther={this.state.rows.fridge.Other}
            readItems={this.readItems}
            {...props}
            />
        );
    }

    sendToFridge = function() {

        let newRows = this.state.rows;

        newRows.shop.FruitVeg.forEach(function(item) {
            if (document.getElementById("check-F" + item.key).checked) {
                newRows.fridge.FruitVeg.push(item);
                console.log("sending " + item.itemQuan + " " + item.itemName)
            }
        });

        newRows.shop.Dairy.forEach(function(item) {
            if (document.getElementById("check-D" + item.key).checked) {
                newRows.fridge.Dairy.push(item);
            }
        });

        newRows.shop.Meat.forEach(function(item) {
            if (document.getElementById("check-M" + item.key).checked) {
                newRows.fridge.Meat.push(item);
            }
        });

        newRows.shop.Other.forEach(function(item) {
            if (document.getElementById("check-O" + item.key).checked) {
                newRows.fridge.Other.push(item);
            }
        });

        this.setState((prevState, props) => {
            return({rows: newRows});
        });

        this.listToFridge();
    }

    clearPage = function(page) {

        let newRows = this.state.rows;
        newRows[page] = {
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
        if (newName !== "" && newQuan > 0) {

            let newRows = this.state.rows[sourcePage][sourceCategory];
            newRows[key] = {
                key: key,
                keyVal: key,
                isLast: false,
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

    handleAddItem = function(targetPage, targetCategory, name, quantity, last) {
        let handle = this;

        let newRows = this.state.rows;
        let target = this.state.rows[targetPage][targetCategory];
        let key = target.length;

        newRows[targetPage][targetCategory].push({
            key: key,
            keyVal: key,
            isLast: last,
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

    readItems = function (sourcePage, callback){
        this.clearPage(sourcePage);
        console.log("read from " + sourcePage)

        this.setState((prevState, props) => {
            let handle = this;
            let path = firebase.auth().currentUser.uid;

            //pull fruit and veg
            let ref = new firebase.database().ref(path + "/" + sourcePage + "FruitVeg/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.val().itemName;
                    var itemQuan = childSnapshot.val().itemQuan;
                    handle.handleAddItem(sourcePage, 'FruitVeg', itemName, itemQuan, false);
                })
                handle.handleAddItem(sourcePage, 'FruitVeg', '', 1, true);
            }).then(callback);

            //pull dairy
            ref = new firebase.database().ref(path + "/" + sourcePage + "Dairy/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.val().itemName;
                    var itemQuan = childSnapshot.val().itemQuan;
                    handle.handleAddItem(sourcePage, 'Dairy', itemName, itemQuan, false);
                })
                handle.handleAddItem(sourcePage, 'Dairy', '', 1, true);
            }).then(callback);

            //pull meat
            ref = new firebase.database().ref(path + "/" + sourcePage + "Meat/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.val().itemName;
                    var itemQuan = childSnapshot.val().itemQuan;
                    handle.handleAddItem(sourcePage, 'Meat', itemName, itemQuan, false)
                })
                handle.handleAddItem(sourcePage, 'Meat', '', 1, true);
            }).then(callback);

            //pull other
            ref = new firebase.database().ref(path + "/" + sourcePage + "Other/");
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    var itemName = childSnapshot.val().itemName;
                    var itemQuan = childSnapshot.val().itemQuan;
                    handle.handleAddItem(sourcePage, 'Other', itemName, itemQuan, false);
                })
                handle.handleAddItem(sourcePage, 'Other', '', 1, true)
            }).then(callback);
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
