import React from 'react';
import { API_BASE_URL } from '../config';

export default class SearchFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            location: '',
            radius: '',
            results: [],
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleRadius = this.handleRadius.bind(this);
    }

    componentDidUpdate() {
        this.fetchResults();
    }

    fetchResults() {
        const { query, location, radius, results } = this.state;

        fetch(`${API_BASE_URL}/findPlaces?query=${query}&location=${location}&radius=${radius}`,
            { method: 'GET' })
            .then(res => {
                console.log('fetching data')
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(data => {
                this.setState({ results: data });
            })
            .then(() => this.props.onFormSubmit(results))
    }

    onSubmit(event) {
        event.preventDefault();
    }

    handleQuery(event) {
        event.preventDefault();
        this.setState({ query: event.target.value });
    }
    handleLocation(event) {
        event.preventDefault();
        this.setState({ location: event.target.value });
    }
    handleRadius(event) {
        event.preventDefault();
        this.setState({ radius: event.target.value });
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <label>
                    What are you looking for?:
                    <br />
                    <input type="text" name="query" placeholder="cafes, grocery stores, etc"
                        onChange={this.handleQuery} />
                </label>
                <br />
                <br />
                <label>
                    Location:
                    <br />
                    <input type="text" name="location" placeholder="address"
                        onChange={this.handleLocation} />
                </label>
                <br />
                <br />
                <label>
                    Radius (in meters):
                    <br />
                    <input type="number" name="radius"
                        onChange={this.handleRadius} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }

}