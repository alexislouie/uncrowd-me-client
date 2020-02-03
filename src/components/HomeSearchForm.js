import React, { Component } from "react";
import "./HomeSearchForm.css";
import { Link } from "react-router-dom";

export default class HomeSearchFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            location: 'New York, NY'
        };
    }
    
    render() {
        const { query, location } = this.state;
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
                            this.setState({ query: e.target.value });
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
                        value={location}
                        ref={this.locationInput}
                        onChange={e => {
                            this.setState({ location: e.target.value });
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
