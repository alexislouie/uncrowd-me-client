import React, { Component } from 'react';
import './SearchForm.css'
import { Route, withRouter, Link } from 'react-router-dom';

class SearchFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: this.props.query,
            location: this.props.userLocation,
            radius: '',
            formWasSubmitted: false,
            results: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.createDataObj = this.createDataObj.bind(this);
    }

    componentDidUpdate() {
        if (this.state.formWasSubmitted === true) {
            this.createDataObj();
        }
    }

    createDataObj() {
        const { query, location, radius } = this.state;
        this.props.onFormSubmit(query, location, radius);
        this.setState({ formWasSubmitted: false })
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

    render() {
        return (
            <form className="searchForm">
                <div>
                    <label>What are you looking for?</label>
                    <input type="text" name="query" placeholder="cafe, grocery store, etc." value={this.state.query} onChange={this.handleQuery} />
                </div>
                <div>
                    <label>Location:</label>
                    <input type="text" name="location" placeholder="address, city, or zip code" value={this.state.location} onChange={this.handleLocation} />
                </div>

                <Link to="/search">
                    <button className="submitButton" onClick={e => this.onSubmit(e)}>
                        <img width="20px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Antu_document-edit-verify.svg/512px-Antu_document-edit-verify.svg.png" />
                    </button>
                </Link>
            </form>
        )
    }

}

export default withRouter(SearchFrom);