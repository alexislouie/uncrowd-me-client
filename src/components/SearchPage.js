import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Results from './Results';
import './SearchPage.css';

export default class SearchPage extends Component {
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
        <SearchForm
          onFormSubmit={results => {
            this.onFormSubmit(results)
          }} />
        <Results results={results} />
      </div>
    );
  }
}