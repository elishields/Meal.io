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
        this.readMeals = this.readMeals.bind(this);
        this.deleteItems = this.deleteItems.bind(this);
        this.deleteItemsNew = this.deleteItemsNew.bind(this);
        this.addToMealPlan = this.addToMealPlan.bind(this);
        this.deleteMeal = this.deleteMeal.bind(this);

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

            meals :[],

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
            deleteItems={this.deleteItemsNew}
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
            deleteItems={this.deleteItems}
            addToMealPlan={this.addToMealPlan}
            {...props}
            />
        );
    }

    WrapMeals = (props) => {
        return (
          <MealPlan
          meals={this.state.meals}
          readMeals={this.readMeals}
          deleteMeal={this.deleteMeal}
          {...props}
          />
        );
    }

    addToMealPlan = function (itemName, amnt, section, meal){
        let handle = this;
        let path = firebase.auth().currentUser.uid;
        let data = {
            [itemName]: amnt
        };
        return new firebase.database().ref(path + "/mealPlans/" + meal + "/").update(data);

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

    handleAddItem = function(targetPage, targetCategory, name, quantity, last, key) {
        let handle = this;

        let newRows = this.state.rows;
        let target = this.state.rows[targetPage][targetCategory];

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

        console.log("added " + name)
    }

    writeItem = function (key, name, quan, section){
        let path = firebase.auth().currentUser.uid;
        let data = {
            itemName : name,
            itemQuan : quan
        };
        return new firebase.database().ref(path + "/" + section + "/" + key).update(data);
    }

    deleteMeal = function (mealName) {
        console.log("Attempting to remove " + mealName + " from meal plans");
        let ref = new firebase.database().ref(firebase.auth().currentUser.uid + "/mealPlans/" + mealName);
        ref.once("value").then(function(snapshot){
            ref.remove();
        })
    }

    //removes an item from the database
    deleteItems = function (key, section, callback){
        console.log("Attempting to delete item keyed: " + key + " from section " + section);
        let ref = new firebase.database().ref(firebase.auth().currentUser.uid + "/" + section + "/" + key);
        ref.once("value").then(function(snapshot){
            ref.remove();
        }).then(callback);
    }

    deleteItemsNew = function(callback) {
        let handle = this;
        let ref = new firebase.database().ref(firebase.auth().currentUser.uid + "/");
        ref.once('value').then(function(snapshot) {
            let db = snapshot.val();

            handle.state.rows.shop.FruitVeg.forEach(function(item) {
                if (document.getElementById('check-F' + item.keyVal).checked) {
                    db['shopFruitVeg'][item.keyVal] = null;
                    console.log("set item at " + item.keyVal + " to null");
                }
            });

            ref.set(db);
        }).then(function(snapshot) {
            callback();
        });
    }

    readMeals = function (callback){
        console.log("Load planned meals from database.");
        this.setState((prevState, props) => {
            let handle = this;
            let newMeals = [];
            let path = firebase.auth().currentUser.uid;
            let ref = new firebase.database().ref(path + "/mealPlans/");
            let key = 0;
            ref.once("value").then(function(snapshot){
                snapshot.forEach(function(childSnapshot){
                    //pulls the name and ingredients of each meal in the database
                    var mealName = Object.keys(snapshot.val())[key];
                    var ingredients = childSnapshot.val();

                    //makes a meal object out of the name and ingredients from above
                    newMeals.push({
                        mealName : mealName,
                        ingredients: ingredients
                    })
                    key ++;
                })

                handle.setState({meals: newMeals});

            }).then(callback);

        })
    }

    readItems = function (sourcePage, callback){
        this.clearPage(sourcePage);

        let handle = this;
        let path = firebase.auth().currentUser.uid;

        let ref = new firebase.database().ref(path + "/");
        ref.once("value").then(function(snapshot) {

            let fruitVegLastKey = 0;
            if (snapshot.val()['shopFruitVeg']) {
                let section = snapshot.val()['shopFruitVeg'];

                Object.keys(section).forEach(function(key) {
                    let item = section[key];
                    handle.handleAddItem(sourcePage, 'FruitVeg', item.itemName, item.itemQuan, false, key);
                
                    fruitVegLastKey = key;
                });
                fruitVegLastKey++;
            }

            let meatLastKey = 0;
            if (snapshot.val()['shopMeat']) {
                let section = snapshot.val()['shopMeat'];

                Object.keys(section).forEach(function(key) {
                    let item = section[key];
                    handle.handleAddItem(sourcePage, 'Meat', item.itemName, item.itemQuan, false, key);
                
                    meatLastKey = key;
                });
                meatLastKey++;
            }

            let dairyLastKey = 0;
            if (snapshot.val()['shopDairy']) {
                let section = snapshot.val()['shopDairy'];

                Object.keys(section).forEach(function(key) {
                    let item = section[key];
                    handle.handleAddItem(sourcePage, 'Dairy', item.itemName, item.itemQuan, false, key);
                
                    dairyLastKey = key;
                });
                dairyLastKey++;
            }

            let otherLastKey = 0;
            if (snapshot.val()['shopOther']) {
                let section = snapshot.val()['shopOther'];

                Object.keys(section).forEach(function(key) {
                    let item = section[key];
                    handle.handleAddItem(sourcePage, 'Other', item.itemName, item.itemQuan, false, key);
                
                    otherLastKey = key;
                });
                otherLastKey++;
            }

            handle.handleAddItem(sourcePage, 'FruitVeg', "", 1, true, fruitVegLastKey);
            handle.handleAddItem(sourcePage, 'Dairy', "", 1, true, dairyLastKey);
            handle.handleAddItem(sourcePage, 'Meat', "", 1, true, meatLastKey);
            handle.handleAddItem(sourcePage, 'Other', "", 1, true, otherLastKey);

        }).then(callback);
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
                                <Route path='/meal-plan' render={this.WrapMeals} />
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
