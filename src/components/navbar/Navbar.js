import React, { Component } from 'react';

import './Navbar.css';


class Navbar extends Component {


    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-menu-button">
                    <i className="material-icons">menu</i>
                </div>
                <div className="navbar-brand-name">
                    Brand
                </div>
                <div className="navbar-more-button">
                    <i className="material-icons">more_vert</i>
                </div>
            </div>
        );
    }
}
export default Navbar;
