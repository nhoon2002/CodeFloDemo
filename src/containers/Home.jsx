import React, { Component } from 'react';
import RegisterModal from '../components/RegisterModal.jsx'
// import Tasks from './Tasks.jsx';
// import Tasks2 from './Tasks2.jsx';
// import logo from './logo-full.png';
// import './Home.css';


class Home extends Component {
	render() {
		return (
        <div>
        <div className="jumbotron">
						<h1>Welcome to <img id="logo" src="assets/img/logo-full.png" /></h1>
						<button className="btn btn-primary loginButton">Sign In</button>
						<RegisterModal/>
        </div>

        </div>

    );
  };
}

export default Home;
