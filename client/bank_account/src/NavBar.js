import React, { Component} from 'react';
import { NavLink, Link } from 'react-router-dom';


const NavBar = (props) => {
    return (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>G&A Online Bank</div>
        <div className='navbar__item'>
        <a href="/account">Current Account</a></div>
        <div className='navbar__item'>
        <a href="/savingsaccount">Saving's Account</a></div>
        <div className='navbar__item'>
        <a href="/deposits">Make A Deposit</a></div>
         <div className='navbar__item'>
         <a href="/">Logout</a></div>
    </header>

  )
};

export default NavBar;
