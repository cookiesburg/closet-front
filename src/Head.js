import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './cart/CartIcon';

export default class Head extends Component {
  render() {
    return(
      <header className="App-header">
        <div className='title-div'>
          <Link to='/'>
            <p className="App-title">CLOSET</p>
          </Link>
        </div>

        <div className='nav-bar'>
          <div></div>
          <div className='search-link'>
            <Link to='/'>SEARCH</Link>
          </div>
          <div className='about-link'>
            <Link to='/about'>ABOUT</Link>
          </div>
          <div className='account-link'>
            <Link to='/my-closet'>ACCOUNT</Link>
          </div>
          <div></div>
          <CartIcon />
        </div>
      </header>
    );
  }

}
