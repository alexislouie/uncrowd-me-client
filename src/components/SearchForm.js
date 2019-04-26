import React from 'react';

export default class SearchFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            location: '',
            radius: ''
        };
    
        this.onSubmit = this.onSubmit.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleRadius = this.handleRadius.bind(this);
      }
    
    onSubmit(event) {
        event.preventDefault();
        this.props.onQueryChange(this.state.query);
        this.props.onLocationChange(this.state.location);
        this.props.onRadiusChange(this.state.radius);
    }

    handleQuery(event) {
        event.preventDefault();
        this.setState({query: event.target.value});
    }
    handleLocation(event) {
        event.preventDefault();
        this.setState({location: event.target.value});
    }
    handleRadius(event) {
        event.preventDefault();
        this.setState({radius: event.target.value});
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <label>
                    What are you looking for?:
                    <br />
                    <input type="text" name="query" placeholder="cafes, grocery stores, etc" 
                        onChange={this.handleQuery}/>
                </label>
                <br />
                <br />
                <label>
                    Location:
                    <br />
                    <input type="text" name="location" placeholder="address" 
                        onChange={this.handleLocation}/>
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