import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Head extends Component {
  render() {
    return(
      <header className="App-header">
        <div>
          <Link to='/'>
            <h1 className="App-title">CLOSET</h1>
          </Link>
        </div>
        <div className='menu-link'>
          <Link to='/'>
            <p>SEARCH</p>
          </Link>
        </div>
        <div className='menu-link'>
          <Link to='/about'>
            <p>ABOUT</p>
          </Link>
        </div>
        <div className='menu-link'>
          <Link to='/my-closet'>
            <p>MY CLOSET</p>
          </Link>
        </div>
      </header>
    );
  }

}
