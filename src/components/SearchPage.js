import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Results from './Results';
import './SearchPage.css';
import { API_BASE_URL } from '../config';

const loader = document.querySelector('.loader');

const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  fetchResults(query, location, radius) {
    const data = {
      places: [
        {
          name: 'McDonalds',
          place_id: 'ChIJP6V-M0xZwokRTBwFXivdlEE',
          formatted_address: "652 Meeker Ave, Brooklyn, NY 11222",
          opening_hours: {
            open_now: true
          },
          rating: 4.4,
          user_ratings_total: 1370,
          geometry: {
            location: {
              lat: 40.70136289999999,
              lng: -73.9434895
            }
          },
          week: [{
            "day": "Sun",
            "hours": [
              {
                "hour": 4,
                "percentage": 29
              },
              {
                "hour": 5,
                "percentage": 27
              },
              {
                "hour": 6,
                "percentage": 13
              },
              {
                "hour": 7,
                "percentage": 16
              },
              {
                "hour": 8,
                "percentage": 29
              },
              {
                "hour": 9,
                "percentage": 56
              },
              {
                "hour": 10,
                "percentage": 83
              },
              {
                "hour": 11,
                "percentage": 100
              },
              {
                "hour": 12,
                "percentage": 91
              },
              {
                "hour": 13,
                "percentage": 67
              },
              {
                "hour": 14,
                "percentage": 40
              },
              {
                "hour": 15,
                "percentage": 24
              },
              {
                "hour": 16,
                "percentage": 16
              },
              {
                "hour": 17,
                "percentage": 16
              },
              {
                "hour": 18,
                "percentage": 24
              },
              {
                "hour": 19,
                "percentage": 32
              },
              {
                "hour": 20,
                "percentage": 40
              },
              {
                "hour": 21,
                "percentage": 45
              },
              {
                "hour": 22,
                "percentage": 48
              },
              {
                "hour": 23,
                "percentage": 48
              },
              {
                "hour": 0,
                "percentage": 43
              },
              {
                "hour": 1,
                "percentage": 35
              },
              {
                "hour": 2,
                "percentage": 27
              },
              {
                "hour": 3,
                "percentage": 24
              }
            ]
          }]
        },
        {
          name: 'McDonalds',
          place_id: 'ChIJO0EmQfpbwokRGLOt2v1MNBY',
          formatted_address: "700 Broadway, Brooklyn, NY 11206, USA",
          opening_hours: {
            open_now: true
          },
          rating: 4.4,
          user_ratings_total: 1370,
          geometry: {
            location: {
              lat: 40.70136289999999,
              lng: -73.9434895
            }
          },
          week: [{
            "day": "Sun",
            "hours": [
              {
                "hour": 4,
                "percentage": 29
              },
              {
                "hour": 5,
                "percentage": 27
              },
              {
                "hour": 6,
                "percentage": 13
              },
              {
                "hour": 7,
                "percentage": 16
              },
              {
                "hour": 8,
                "percentage": 29
              },
              {
                "hour": 9,
                "percentage": 56
              },
              {
                "hour": 10,
                "percentage": 83
              },
              {
                "hour": 11,
                "percentage": 100
              },
              {
                "hour": 12,
                "percentage": 91
              },
              {
                "hour": 13,
                "percentage": 67
              },
              {
                "hour": 14,
                "percentage": 40
              },
              {
                "hour": 15,
                "percentage": 24
              },
              {
                "hour": 16,
                "percentage": 16
              },
              {
                "hour": 17,
                "percentage": 16
              },
              {
                "hour": 18,
                "percentage": 24
              },
              {
                "hour": 19,
                "percentage": 32
              },
              {
                "hour": 20,
                "percentage": 40
              },
              {
                "hour": 21,
                "percentage": 45
              },
              {
                "hour": 22,
                "percentage": 48
              },
              {
                "hour": 23,
                "percentage": 48
              },
              {
                "hour": 0,
                "percentage": 43
              },
              {
                "hour": 1,
                "percentage": 35
              },
              {
                "hour": 2,
                "percentage": 27
              },
              {
                "hour": 3,
                "percentage": 24
              }
            ]
          }]
        },
        {
          name: 'NY Study Room',
          place_id: 'ChIJtfCwX6hZwokRdr76YsIWDJE',
          formatted_address: "207 W 14th St, New York, NY 10011, USA",
          opening_hours: {
            open_now: true
          },
          rating: 4.4,
          user_ratings_total: 1370,
          geometry: {
            location: {
              lat: 40.7130517,
              lng: -73.9902098
            }
          },
          week: [{
            "day": "Mon",
            "hours": [
              {
                "hour": 4,
                "percentage": 29
              },
              {
                "hour": 5,
                "percentage": 27
              },
              {
                "hour": 6,
                "percentage": 13
              },
              {
                "hour": 7,
                "percentage": 16
              },
              {
                "hour": 8,
                "percentage": 29
              },
              {
                "hour": 9,
                "percentage": 56
              },
              {
                "hour": 10,
                "percentage": 83
              },
              {
                "hour": 11,
                "percentage": 100
              },
              {
                "hour": 12,
                "percentage": 91
              },
              {
                "hour": 13,
                "percentage": 67
              },
              {
                "hour": 14,
                "percentage": 40
              },
              {
                "hour": 15,
                "percentage": 24
              },
              {
                "hour": 16,
                "percentage": 16
              },
              {
                "hour": 17,
                "percentage": 16
              },
              {
                "hour": 18,
                "percentage": 24
              },
              {
                "hour": 19,
                "percentage": 32
              },
              {
                "hour": 20,
                "percentage": 40
              },
              {
                "hour": 21,
                "percentage": 45
              },
              {
                "hour": 22,
                "percentage": 48
              },
              {
                "hour": 23,
                "percentage": 48
              },
              {
                "hour": 0,
                "percentage": 43
              },
              {
                "hour": 1,
                "percentage": 35
              },
              {
                "hour": 2,
                "percentage": 27
              },
              {
                "hour": 3,
                "percentage": 24
              }
            ]
          }]
        },
        {
          name: 'Neptune Diner II',
          place_id: 'ChIJUbYC4KFbwokRzm4s-s-xCfk',
          formatted_address: "699 Classon Ave, Brooklyn, NY 11238",
          opening_hours: {
            open_now: true
          },
          rating: 4.4,
          user_ratings_total: 1370,
          geometry: {
            location: {
              lat: 40.7115438,
              lng: -74.01290949
            }
          },
          week: [{
            "day": "Mon",
            "hours": [
              {
                "hour": 4,
                "percentage": 29
              },
              {
                "hour": 5,
                "percentage": 27
              },
              {
                "hour": 6,
                "percentage": 13
              },
              {
                "hour": 7,
                "percentage": 16
              },
              {
                "hour": 8,
                "percentage": 29
              },
              {
                "hour": 9,
                "percentage": 56
              },
              {
                "hour": 10,
                "percentage": 83
              },
              {
                "hour": 11,
                "percentage": 100
              },
              {
                "hour": 12,
                "percentage": 91
              },
              {
                "hour": 13,
                "percentage": 67
              },
              {
                "hour": 14,
                "percentage": 40
              },
              {
                "hour": 15,
                "percentage": 24
              },
              {
                "hour": 16,
                "percentage": 16
              },
              {
                "hour": 17,
                "percentage": 16
              },
              {
                "hour": 18,
                "percentage": 24
              },
              {
                "hour": 19,
                "percentage": 32
              },
              {
                "hour": 20,
                "percentage": 40
              },
              {
                "hour": 21,
                "percentage": 45
              },
              {
                "hour": 22,
                "percentage": 48
              },
              {
                "hour": 23,
                "percentage": 48
              },
              {
                "hour": 0,
                "percentage": 43
              },
              {
                "hour": 1,
                "percentage": 35
              },
              {
                "hour": 2,
                "percentage": 27
              },
              {
                "hour": 3,
                "percentage": 24
              }
            ]
          }]
        },
        // {
        //   name: 'B Cup Cafe New York City',
        //   place_id: 'ChIJ3eHXlHZZwokRuzME-28niVI',
        //   formatted_address: "207 W 14th St, New York, NY 10011, USA",
        //   opening_hours: {
        //     open_now: true
        //   },
        //   rating: 4.4,
        //   user_ratings_total: 1370,
        //   geometry: {
        //     location: {
        //       lat: 40.695172,
        //       lng: -73.9961544
        //     }
        //   },
        //   week: [{
        //     "day": "Sun",
        //     "hours": [
        //       {
        //         "hour": 4,
        //         "percentage": 29
        //       },
        //       {
        //         "hour": 5,
        //         "percentage": 27
        //       },
        //       {
        //         "hour": 6,
        //         "percentage": 13
        //       },
        //       {
        //         "hour": 7,
        //         "percentage": 16
        //       },
        //       {
        //         "hour": 8,
        //         "percentage": 29
        //       },
        //       {
        //         "hour": 9,
        //         "percentage": 56
        //       },
        //       {
        //         "hour": 10,
        //         "percentage": 83
        //       },
        //       {
        //         "hour": 11,
        //         "percentage": 100
        //       },
        //       {
        //         "hour": 12,
        //         "percentage": 91
        //       },
        //       {
        //         "hour": 13,
        //         "percentage": 67
        //       },
        //       {
        //         "hour": 14,
        //         "percentage": 40
        //       },
        //       {
        //         "hour": 15,
        //         "percentage": 24
        //       },
        //       {
        //         "hour": 16,
        //         "percentage": 16
        //       },
        //       {
        //         "hour": 17,
        //         "percentage": 16
        //       },
        //       {
        //         "hour": 18,
        //         "percentage": 24
        //       },
        //       {
        //         "hour": 19,
        //         "percentage": 32
        //       },
        //       {
        //         "hour": 20,
        //         "percentage": 40
        //       },
        //       {
        //         "hour": 21,
        //         "percentage": 45
        //       },
        //       {
        //         "hour": 22,
        //         "percentage": 48
        //       },
        //       {
        //         "hour": 23,
        //         "percentage": 48
        //       },
        //       {
        //         "hour": 0,
        //         "percentage": 43
        //       },
        //       {
        //         "hour": 1,
        //         "percentage": 35
        //       },
        //       {
        //         "hour": 2,
        //         "percentage": 27
        //       },
        //       {
        //         "hour": 3,
        //         "percentage": 24
        //       }
        //     ]
        //   }]
        // },
        {
          name: 'Ninth Street Espresso',
          place_id: 'ChIJzeWUWndZwokRyAM_ckmcdDY',
          formatted_address: "207 W 14th St, New York, NY 10011, USA",
          opening_hours: {
            open_now: false
          },
          rating: 4.4,
          user_ratings_total: 1370,
          geometry: {
            location: {
              lat: 40.7175988,
              lng: -73.996988
            }
          },
          week: [{
            "day": "Sun",
            "hours": [
              {
                "hour": 4,
                "percentage": 29
              },
              {
                "hour": 5,
                "percentage": 27
              },
              {
                "hour": 6,
                "percentage": 13
              },
              {
                "hour": 7,
                "percentage": 16
              },
              {
                "hour": 8,
                "percentage": 29
              },
              {
                "hour": 9,
                "percentage": 56
              },
              {
                "hour": 10,
                "percentage": 83
              },
              {
                "hour": 11,
                "percentage": 100
              },
              {
                "hour": 12,
                "percentage": 91
              },
              {
                "hour": 13,
                "percentage": 67
              },
              {
                "hour": 14,
                "percentage": 40
              },
              {
                "hour": 15,
                "percentage": 24
              },
              {
                "hour": 16,
                "percentage": 16
              },
              {
                "hour": 17,
                "percentage": 16
              },
              {
                "hour": 18,
                "percentage": 24
              },
              {
                "hour": 19,
                "percentage": 32
              },
              {
                "hour": 20,
                "percentage": 40
              },
              {
                "hour": 21,
                "percentage": 45
              },
              {
                "hour": 22,
                "percentage": 48
              },
              {
                "hour": 23,
                "percentage": 48
              },
              {
                "hour": 0,
                "percentage": 43
              },
              {
                "hour": 1,
                "percentage": 35
              },
              {
                "hour": 2,
                "percentage": 27
              },
              {
                "hour": 3,
                "percentage": 24
              }
            ]
          }]
        },
        {
          name: 'Remedy Diner',
          place_id: 'ChIJH-VtMYJZwokRIVHfp50qwYc',
          formatted_address: "245 E Houston St, New York, NY 10002, USA",
          opening_hours: {
            open_now: true
          },
          rating: 4.4,
          user_ratings_total: 1370,
          geometry: {
            location: {
              lat: 40.717311,
              lng: -73.990004599
            }
          },
          week: [{
            "day": "Sun",
            "hours": [
              {
                "hour": 4,
                "percentage": 29
              },
              {
                "hour": 5,
                "percentage": 27
              },
              {
                "hour": 6,
                "percentage": 13
              },
              {
                "hour": 7,
                "percentage": 16
              },
              {
                "hour": 8,
                "percentage": 29
              },
              {
                "hour": 9,
                "percentage": 56
              },
              {
                "hour": 10,
                "percentage": 83
              },
              {
                "hour": 11,
                "percentage": 100
              },
              {
                "hour": 12,
                "percentage": 91
              },
              {
                "hour": 13,
                "percentage": 67
              },
              {
                "hour": 14,
                "percentage": 40
              },
              {
                "hour": 15,
                "percentage": 24
              },
              {
                "hour": 16,
                "percentage": 16
              },
              {
                "hour": 17,
                "percentage": 16
              },
              {
                "hour": 18,
                "percentage": 24
              },
              {
                "hour": 19,
                "percentage": 32
              },
              {
                "hour": 20,
                "percentage": 40
              },
              {
                "hour": 21,
                "percentage": 45
              },
              {
                "hour": 22,
                "percentage": 48
              },
              {
                "hour": 23,
                "percentage": 48
              },
              {
                "hour": 0,
                "percentage": 43
              },
              {
                "hour": 1,
                "percentage": 35
              },
              {
                "hour": 2,
                "percentage": 27
              },
              {
                "hour": 3,
                "percentage": 24
              }
            ]
          }]
        }],
      userCoordinates: [
        40.7112334,
        -73.9570399
      ]
    };

    this.setState({
      results: data
    });

    // fetch(`${API_BASE_URL}/findPlaces?query=${query}&location=${location}&radius=1600&opennow=true`,
    //     { method: 'GET' })
    //     .then(res => {
    //         if (!res.ok) {
    //             return Promise.reject(res.statusText);
    //         }
    //         return res.json();
    //     })
    //     .then(data => this.setState({ results: data }))
  }

  render() {
    const { results } = this.state;

    return (
      <div className="searchPage">
        <SearchForm
          onFormSubmit={(query, location, radius) => {
            this.fetchResults(query, location, radius)
          }} />

        <Results
          hideLoader={hideLoader}
          showLoader={showLoader}
          results={results} />
      </div>
    );
  }
}