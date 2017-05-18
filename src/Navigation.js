//Import classes from React
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import * as firebase from "firebase";
import AlertContainer from 'react-alert'

//Import our resources
import Logo from '../res/Logo-str.png';
import NavIconList from '../res/Nav-Icons/list.svg';
import NavIconFridge from '../res/Nav-Icons/fridge.svg';
import NavIconPlate from '../res/Nav-Icons/plate.svg'

const LogoutButton = withRouter(({ history }) => (
      <button id="logout-button" onClick={() => {
        history.push('/');
        firebase.auth().signOut();
      }}>Sign out</button>
))


/*
 *  Header: defines the header common to all pages
 */
export class Header extends Component {
    //called when logout button is pressed to log user out
    logout = function(){
        firebase.auth().signOut();
    }

    /*
     *  render() defines the HTML template for this class.
     */
    render() {
        return (
            <row className="container-fluid">
                <row>
                    <nav className="navbar navbar-fixed-top" id="header">
                        <div>
                            <a href="" className="navbar-brand">
                                <img className="logo" src={Logo} alt="Meal.io"/>
                            </a>
                            <ButtonGroup className="pull-right" id="menu-icon">
                                <DropdownButton title="" className="glyphicon glyphicon-menu-hamburger" pullRight noCaret id="bg-nested-dropdown">
                                    <MenuItem className="menu-item" eventKey="1">
                                        <Link to="/affiliated-page">Affiliated Apps</Link>
                                    </MenuItem>
                                    <MenuItem className="menu-item" eventKey="2">
                                        <Link to="/about-us">About Us</Link>
                                    </MenuItem>
                                    <MenuItem divider/>
                                    <MenuItem className="menu-item" eventKey="3"><LogoutButton /></MenuItem>
                                </DropdownButton>
                            </ButtonGroup>
                        </div>
                    </nav>
                </row>
            </row>
        );
    }
}

export class Tips extends Component {
    alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'light',
        time: 10000,
        transition: 'fade'
    }

    showAlert = () => {
        this.msg.show('Some text or component', {
            time: 6000,
            type: 'success',
            icon: <img src="path/to/some/img/32x32.png" />
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.showAlert(), 15000);
    }

    render () {
        return (
            <div>
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                {/*<button onClick={this.showAlert}>Show Alert</button>*/}
            </div>
        )
    }
}

/*
 *  Footer: defines the navbar common to all pages.
 */
export class Footer extends React.Component {

    /*
     *  render() defines the HTML template for this class.
     */
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <nav className="navbar navbar-fixed-bottom" id="footer">
                            <div className="nav-icon-group">
                                <div className="col-xs-4">
                                    <Link to="/list">
                                        <img src={NavIconList} className="nav-icon" id="nav-icon-list" alt="Grocery List"/>
                                        <br/>
                                        <p>Grocery</p>
                                    </Link>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="/fridge">
                                        <img src={NavIconFridge} className="nav-icon" id="nav-icon-fridge" alt="My Fridge"/>
                                        <p>My Fridge</p>
                                    </Link>
                                </div>
                                <div className="col-xs-4">
                                    <Link to="/meal-plan">
                                        <img src={NavIconPlate} className="nav-icon" id="nav-icon-plate" alt="Meal Plan"/>
                                        <p>Meal Plan</p>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}