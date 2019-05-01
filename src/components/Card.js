import React from 'react';

export default function Card(props) {
    // go through props, add them with Name of the prop and the data 

    return (
        <div>
            Name: {props.name}<br />
            Address: {props.formatted_address}<br />
            Open Now: {props.opening_hours.open_now}<br />
            Live Status: {props.liveStatus} {props.error}<br />
            Usual Status: {props.usualStatus} {props.error}<br/>
            Rating: {props.rating} out of {props.user_ratings_total} ratings
        </div> 
    );
}

Card.defaultProps = {
    // text: ''
};