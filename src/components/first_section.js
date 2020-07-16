import React, { Component } from 'react';
import logo from '../assets/LennyDev.png';
import { Navbar, NavbarBrand, NavDropdown, Nav, FormControl, Button, Form } from 'react-bootstrap';


export default class Section1 extends Component {
    render(){
        return(
            <>
                <nav class="navbar whitenav justify-content-between navbar-expand-lg navbar-light">
                    <img class="logo" src={logo}/>
                    <div class="navbar-nav">
                        <button class="btn btn-outline-primary bp">Contact</button>
                    </div>
                </nav>
            </>
        )
    }
}