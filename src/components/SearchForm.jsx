
import React, { Component }from 'react';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
const AsyncExample = React.createClass({
  getInitialState() {
    return {
      options: [],
    };
  },


  render() {
    return (

      <AsyncTypeahead
        labelKey="login"
        onSearch={this._handleSearch}
        options={this.state.options}
        placeholder="Search for a user..."
        renderMenuItemChildren={(option, props, index) => (
          <div>
            <img
              src={option.avatar_url}
              style={{
                height: '24px',
                marginRight: '10px',
                width: '24px',
              }}
            />
            <span>{option.login}</span>
            {/* .login is the username field from the github response. */}
          </div>

        )}
      />
    );
  },

  _handleSearch(query) {
    if (!query) {
      return;
    }

    fetch(`https://api.github.com/search/users?q=${query}`)
      .then(resp => resp.json())
      .then(json => this.setState({options: json.items}));
  },
});
export default AsyncExample;
