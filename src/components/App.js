import React, { Component } from 'react';

import SearchForm from './SearchForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(results) {
    this.setState({
      results
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Uncrowd Me</h1>
        <SearchForm
          onFormSubmit={results => {
            this.onFormSubmit(results)
          }} />
      </div>
    );
  }
}