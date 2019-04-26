import React from 'react';

export default function Card(props) {
    return (
        <div className="card">
            {props.name}<br />
            {props.address}<br />
            {props.status}
        </div>
    );
}

Card.defaultProps = {
    // text: ''
};