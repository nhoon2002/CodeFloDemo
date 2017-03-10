import React from 'react';
import logo from './logo.svg';
import profilepic from './profilepic.jpg'
import SearchForm from './SearchForm.jsx';
import './Header.css';
export default function() {
  return(
    <nav className="navbar navbar-default">
    <div className="container-fluid">

      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">
          <span className="brand-name">CodeFlo.</span>
          <img src={logo} className="Header-logo" alt="logo" />
        </a>
      </div>


      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Teams</a></li>

        </ul>
        <SearchForm/>

        <ul className="nav navbar-nav navbar-right">
          <li className="notifications-bar">
            <button className="btn btn-primary" type="button">Notifications
              <span className="badge">4</span>
            </button>
          </li>
          <li>
            <img className='navbar-profilepic img-circle' src={profilepic} alt='profilepic'/>
          </li>
          <li><a href="#">Logout</a></li>


        </ul>
      </div>
    </div>
  </nav>
);
}
