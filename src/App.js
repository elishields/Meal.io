//Import classes from React
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Import classes for our pages

import { GroceryList } from './GroceryList.js';
import { Fridge } from './Fridge.js';
import { LandingPage } from './Landing-page.js';
import { EasterGroceryList } from './easter-egg-page.js';


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
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/list' component={GroceryList} />
            <Route path='/fridge' component={Fridge} />
            <Route path='/affiliated-page' component={AffiliatedPage} />
            <Route path='/about-us' component={AboutusPage} />
            <Route path='/easter-egg-page' component={EasterGroceryList} />
        </Switch>
    </main>
)

/*
 * App: this is the 'entry point' for our app. It is loaded in index.js
 */
class App extends Component {

    /*
    *  render() defines the HTML template for this class.
    */
    render() {
        return (
            <div className="app">
                <div id="bootstrap-overrides">
                    <div className="container-fluid">

                        <Main/>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
