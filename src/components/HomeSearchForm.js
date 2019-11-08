import React, { Component } from "react";
import "./HomeSearchForm.css";
import { Link } from "react-router-dom";

export default class HomeSearchFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            location: 'New York, NY',
            // formErrors: {query: '', location: ''},
            // queryError: false,
            // locationError: false,
            // formSubmitted: false
        };
        this.handleQuery = this.handleQuery.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        // this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        console.log('query: ', this.state.query)
        console.log('type of query: ', typeof this.state.query)
        console.log('location: ', this.state.location)
        console.log('type of location: ', typeof this.state.location)
    }

    // componentDidUpdate(prevState) {
    //     if (formSubmitted === true) {
    //         this.updateState();
    //     }
    // }

    // updateState() {
    //     const { query, location } = this.state;
    //     if (query === "" || !query) {
    //         this.setState({ queryError: true });
    //     } else {
    //         this.setState({ queryError: false });
    //     }

    //     if (location === "" || !location) {
    //         this.setState({ locationError: true });
    //     } else {
    //         this.setState({ locationError: false });
    //     }

    //     this.setState({ formSubmitted: false });
    // }

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
        // const { query, location, queryError, locationError } = this.state;

        return (
            <form className="homeSearchForm">
                <div>
                    <label>What are you looking for?</label>
                    <input
                        // className={`${queryError === true ? "error" : ""}`}
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
                        // className={`${locationError === true ? "error" : ""}`}
                        type="text"
                        name="location"
                        placeholder="address, city, zip code"
                        value={location}
                        ref={this.locationInput}
                        onChange={this.handleLocation}
                    />
                </div>
                {/* <button className="submitButton" onSubmit={this.handleSubmit}>
                    <img
                        width="24px"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Antu_document-edit-verify.svg/512px-Antu_document-edit-verify.svg.png"
                    />
                </button> */}

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
