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
 *  Main is our viewport; it is filled by BrowserRouter according to the url path.
 */
const Main = (props) => (
    <main>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/list' component={(props) => <GroceryList {...props} /> } />
            <Route path='/fridge' component={Fridge} />
            <Route path='/affiliated-page' component={AffiliatedPage} />
            <Route path='/about-us' component={AboutusPage} />
        </Switch>
    </main>
)

/*
 * App: this is the 'entry point' for our app. It is loaded in index.js
 */
class App extends Component {

    constructor(props) {
        super(props);

        let listInitialFruitandveg = [];
        listInitialFruitandveg.push(<ListItem key={0} myId={0} itemQuan={1} onChange={this.handleAddListFruitandveg.bind(this)} name="NAME" />);

        let listInitialMeat = [];
        listInitialMeat.push(<ListItem key={0} myId={0} itemQuan={1} onChange={this.handleAddListMeat.bind(this)} name="NAME" />);

        let listInitialDairy = [];
        listInitialDairy.push(<ListItem key={0} myId={0} itemQuan={1} onChange={this.handleAddListDairy.bind(this)} name="NAME" />);

        let listInitialOther = [];
        listInitialOther.push(<ListItem key={0} myId={0} itemQuan={1} onChange={this.handleAddListOther.bind(this)} name="NAME" />);

        this.state = {
            listRowsFruitandveg: listInitialFruitandveg,
            listRowsMeat: listInitialMeat,
            listRowsDairy: listInitialDairy,
            listRowsOther: listInitialOther
        };
    }

    handleOnBlur = function() {
        alert("blurred!!!!!!!!!!!!!!!!!")
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


    handleAddListFruitandveg = function(name, quantity) {
        
        // reference to this component
        let handle = this;

        // update component state...
        this.setState((prevState, props) => {

            // get rows from component's previous state
            let newStateListRowsFruitandveg = prevState.listRowsFruitandveg;

            // push a new ListItem to newStateRows
            newStateListRowsFruitandveg.push(
                <ListItem key={newStateListRowsFruitandveg.length}
                    itemName={name}
                    itemQuan={quantity}
                    myId={newStateListRowsFruitandveg.length}
                    name="Added Item"
                    onChange={handle.handleAddListFruitandveg.bind(handle)}
                />);

            // update GroceryList's state.rows = newStateRows
            return({listRowsFruitandveg: newStateListRowsFruitandveg});
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
                    myId={newStateListRowsMeat.length}
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
                    myId={newStateListRowsDairy.length}
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
                    myId={newStateListRowsOther.length}
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
