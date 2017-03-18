import React, { PropTypes, Component } from 'react';
import Header from '../components/Header.jsx';

function getNiceName(routes) {
	let path = (routes[routes.length - 1] || {}).path || 'Home';
	return path.replace('/', '')
			.toUpperCase() || 'Unknown Page';
}

class Main extends Component {
  render() {
    return (
      <div className="Main">

        <Header />

          <h2>{getNiceName(this.props.routes)}{' '}</h2>


        <div className="container Main-content">
          React.cloneElement(this.props.children, this.props)
        </div>
      </div>

    );

  }
}

Main.propTypes = {
	children: PropTypes.node,
	routes: PropTypes.array
};

export default Main;
