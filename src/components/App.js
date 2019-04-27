import React, { Component } from 'react';

import SearchForm from './SearchForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // query: '',
      // location: '',
      // radius: '',
      results: []
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);

    // this.fetchResults = this.fetchResults.bind(this);
    // this.fetchBusyTimes = this.fetchBusyTimes.bind(this);

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