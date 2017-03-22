import React from 'react';
import Register from './Register.jsx'
// import LoginModal from '../components/LoginModal.jsx'




const Home = React.createClass ({
	render() {
		return (
        <div>
        <div className="jumbotron">
						<h1>Welcome to</h1>
						<Register/>
        </div>

        </div>

    );
  }
});

export default Home;
