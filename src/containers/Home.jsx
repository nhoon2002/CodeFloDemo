import React from 'react';
import Register from './Register.jsx'
// import LoginModal from '../components/LoginModal.jsx'




const Home = React.createClass ({
	render() {
		return (
        <div>
        <div className="jumbotron">
						<h1>Welcome to</h1>
						<Register modalProps={this.props}/>
						{/* Have to pass props to nested components. The nested component can access this.props by calling this.props.modalProps... */}
        </div>

        </div>

    );
  }
});

export default Home;
