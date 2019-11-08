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
        this.handleQuery = this.handleQuery.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
    }

    componentDidMount() {
        console.log('query: ', this.state.query)
        console.log('type of query: ', typeof this.state.query)
        console.log('location: ', this.state.location)
        console.log('type of location: ', typeof this.state.location)
    }

    handleQuery(event) {
        event.preventDefault();
        this.setState({ query: event.target.value });
        localStorage.setItem("query", event.target.value);
    }
    handleLocation(event) {
        event.preventDefault();
        this.setState({ location: event.target.value });
        localStorage.setItem("location", event.target.value);
    }

    handleSubmit() {
        this.setState({ formSubmitted: true });
    }

    render() {
        const { query, location } = this.state;

        return (
            <form className="homeSearchForm">
                <div>
                    <label>What are you looking for?</label>
                    <input
                        type="text"
                        name="query"
                        placeholder="cafes, grocery stores, etc"
                        ref={this.queryInput}
                        onChange={this.handleQuery}
                    />
                </div>
                <div>
                    <label>Location:</label>
                    <input
                        type="text"
                        name="location"
                        placeholder="address, city, zip code"
                        value={location}
                        ref={this.locationInput}
                        onChange={this.handleLocation}
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
