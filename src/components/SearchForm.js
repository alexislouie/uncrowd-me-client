import React from 'react';
import './SearchForm.css'
import { Route, withRouter } from 'react-router-dom';

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
        this.handleQuery = this.handleQuery.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        // this.handleRadius = this.handleRadius.bind(this);

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
    // handleRadius(event) {
    //     event.preventDefault();
    //     this.setState({ radius: event.target.value });
    // }

    render() {
        return (

            <form>
                <div>
                    <label>What are you looking for?</label>
                    <input type="text" name="query" placeholder="cafes, grocery stores, etc"
                        ref={this.queryInput} onChange={this.handleQuery} />
                </div>
                <div>
                    <label>Location:</label>
                    <input type="text" name="location" placeholder="address, city, zip code"
                        ref={this.locationInput} onChange={this.handleLocation} />
                </div>

                <button className="submitButton" onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        )
    }

}

export default withRouter(SearchFrom);