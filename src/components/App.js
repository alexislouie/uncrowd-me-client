import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Results from './Results';

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
    const { results } = this.state;

    return (
      <div className="App">
        <h1>Uncrowd Me</h1>
        <SearchForm
          onFormSubmit={results => {
            this.onFormSubmit(results)
          }} />
        <Results results={results} />
      </div>
    );
  }
}