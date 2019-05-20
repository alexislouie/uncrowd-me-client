import React from 'react';
import { Route , withRouter} from 'react-router-dom';
// import { API_BASE_URL } from '../config';

class SearchFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            location: '',
            radius: '',
            formWasSubmitted: false,
            results: [],
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.fetchResults = this.fetchResults.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        // this.handleRadius = this.handleRadius.bind(this);
    }

    componentDidUpdate() {
        if (this.state.formWasSubmitted === true) {
            this.fetchResults();
        }
    }

    fetchResults() {

        const data = [
            {
                name: 'NY Study Room',
                place_id: 'ChIJtfCwX6hZwokRdr76YsIWDJE',
                formatted_address: "207 W 14th St, New York, NY 10011, USA",
                opening_hours: {
                    open_now: true
                },
                rating: 4.4,
                user_ratings_total: 1370,
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
                name: 'B Cup Cafe New York City',
                place_id: 'ChIJ3eHXlHZZwokRuzME-28niVI',
                formatted_address: "207 W 14th St, New York, NY 10011, USA",
                opening_hours: {
                    open_now: true
                },
                rating: 4.4,
                user_ratings_total: 1370,
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
                name: 'Ninth Street Espresso',
                place_id: 'ChIJzeWUWndZwokRyAM_ckmcdDY',
                formatted_address: "207 W 14th St, New York, NY 10011, USA",
                opening_hours: {
                    open_now: false
                },
                rating: 4.4,
                user_ratings_total: 1370,
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
            }
        ];

        this.setState({ 
                        formWasSubmitted: false,
                        results: data 
                    });
        this.props.onFormSubmit(data)


        // const { query, location } = this.state;

        // fetch(`${API_BASE_URL}/findPlaces?query=${query}&location=${location}&radius=1600&opennow=true`,
        //     { method: 'GET' })
        //     .then(res => {
        //         if (!res.ok) {
        //             return Promise.reject(res.statusText);
        //         }
        //         return res.json();
        //     })
        //     .then(data => {
        //         this.setState({ 
        //             formWasSubmitted: false,
        //             results: data 
        //         });
        //         this.props.onFormSubmit(data)
        //     })
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({ formWasSubmitted: true });
        // this.props.history.push(`/search/${this.state.query}/${this.state.location}`);

    }

    handleQuery(event) {
        event.preventDefault();
        this.setState({ query: event.target.value });
    }
    handleLocation(event) {
        event.preventDefault();
        this.setState({ location: event.target.value });
    }
    // handleRadius(event) {
    //     event.preventDefault();
    //     this.setState({ radius: event.target.value });
    // }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <label>
                    What are you looking for?
                    <br />
                    <input type="text" name="query" placeholder="cafes, grocery stores, etc"
                        ref={this.queryInput} onChange={this.handleQuery} />
                </label>
                <br />
                <br />
                <label>
                    Location:
                    <br />
                    <input type="text" name="location" placeholder="address"
                        ref={this.locationInput} onChange={this.handleLocation} />
                </label>
                <br />
                <br />

                <input type="submit" value="Submit" />
            </form>
        )
    }

}

export default withRouter(SearchFrom);