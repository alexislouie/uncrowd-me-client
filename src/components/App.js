import React, { Component } from 'react';
// import SearchSection from './SearchSection';
import SearchForm from './SearchForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      location: '',
      radius: '',
      results: []
    };

    this.setQuery = this.setQuery.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setRadius = this.setRadius.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    // this.fetchBusyTimes = this.fetchBusyTimes.bind(this);

  }

  setQuery(query) {
    this.setState({
      query
    })
  }

  setLocation(location) {
    this.setState({
      location
    })
  }

  setRadius(radius) {
    this.setState({
      radius
    })
  }
  fetchResults() {

    const dummyResults = [
      {
        name: 'The Cliffs: LIC',
        address: '2222 Long Island City',
        rating: 4.4,
        status: 30 // from busyHours
      },
      {
        name: 'The Cliffs DUMBO',
        address: '123 Wburg Bridge',
        rating: 4.1,
        status: 30
      },
      {
        name: 'Brooklyn Boulders: Gowanus',
        address: '444 Not Queensbridge',
        rating: 4.0,
        status: 30
      }
    ];

    this.setState({ results: dummyResults });

    // this will be replaced with Google API 
    // it will take an argument which will be this.state.searchQuery
    // make new function called fetchBusyHours (or w/e)
    // which will add busy hours to each object 
    // see sublime doc 

  }

  render() {
    return (
      <div className="App">
        <h1>Uncrowd Me</h1>
        <SearchForm
          onQueryChange={query => this.setQuery(query)}
          onLocationChange={location => this.setLocation(location)}
          onRadiusChange={radius => this.setRadius(radius)}/>
      </div>
    );
  }
}
