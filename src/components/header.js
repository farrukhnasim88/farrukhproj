import React, { useState} from 'react';
import { Link, Route} from 'react-router-dom';
import logo from '../logo.svg';
import Button from './button.js';

function Header() {
  
   
    return (
        <header className="App-header">
            <img className="App-logo" src={logo} alt="logo" />
            Farrukh_List_Notes
            <Link to="/"> HOME  </Link>
            <Link to="/add">  ADD  </Link>
           <Button/>

        </header>
    );
}

export default Header;
