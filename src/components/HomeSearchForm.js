import React, { Component } from "react";
import { connect } from 'react-redux';
import "./HomeSearchForm.css";
import { Link } from "react-router-dom";

import {updateQuery, updateLocation} from '../actions';

export class HomeSearchFrom extends Component {
    render() {
        return (
            <form className="homeSearchForm">
                <div className="homeFormInput">
                    <label>What are you looking for?</label>
                    <input
                        type="text"
                        name="query"
                        placeholder="cafes, grocery stores, etc"
                        ref={this.queryInput}
                        onChange={e => {
                            this.props.dispatch(updateQuery(e.target.value))
                            localStorage.setItem("query", e.target.value);

                        }}
                    />
                </div>
                <div className="homeFormInput">
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="address, city, zip code"
                        value={this.props.location}
                        ref={this.locationInput}
                        onChange={e => {
                            this.props.dispatch(updateLocation(e.target.value))
                            localStorage.setItem("location", e.target.value);
                        }}
                    />
                </div>
                <Link to="/search">
                    <button className="submitButton">
                        <img
                            width="24px"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Antu_document-edit-verify.svg/512px-Antu_document-edit-verify.svg.png"
                        />
                    </button>
                </Link>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    query: state.query,
    location: state.location
})

export default connect(mapStateToProps)(HomeSearchFrom);