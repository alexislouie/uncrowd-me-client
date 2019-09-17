import React from 'react';
import './InfoBox.css';


export default function InfoBox(props) {

    return (
        <div className="infoBox">
            {props.name}
            {props.address}
        </div>
    )
}