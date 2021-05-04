import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateQuery, updateLocation, toggleFormSubmission } from '../actions';

import './SearchForm.css'

import { Route, withRouter, Link } from 'react-router-dom';

export class SearchFrom extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.createDataObj = this.createDataObj.bind(this);
    }

    componentDidUpdate() {
        if (this.props.formWasSubmitted === true) {
            this.createDataObj();
        }
    }

    createDataObj() {
        const { query, location, radius } = this.props;
        this.props.onFormSubmit(query, location, radius);
        this.props.dispatch(toggleFormSubmission(false))
    }

    onSubmit(event) {
        event.preventDefault();
        const { query, location } = this.props;
        if (query === '' || !query) {
            this.props.dispatch(updateQuery('New Places'))
        } 
        if (location === '' || !location) {
            this.props.dispatch(updateLocation('New York, NY'))
        }
        this.props.dispatch(toggleFormSubmission(true))
    }

    render() {
        return (
            <form className="searchForm">
                <div>
                    <label>What are you looking for?</label>
                    <input type="text" name="query" placeholder="cafe, grocery store, etc." value={this.props.query} onChange={e => { this.props.dispatch(updateQuery(e.target.value)) }} />
                </div>
                <div>
                    <label>Location:</label>
                    <input type="text" name="location" placeholder="address, city, or zip code" value={this.props.location} onChange={e => { this.props.dispatch(updateLocation(e.target.value)) }} />
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

const mapStateToProps = state => ({
    query: state.query,
    location: state.location,
    radius: '',
    formWasSubmitted: state.formWasSubmitted
})

export default connect(mapStateToProps)(SearchFrom);