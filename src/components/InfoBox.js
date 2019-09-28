import React from 'react';
import './InfoBox.css';


export default function InfoBox(props) {

    const style = (props.name) ? { display: 'block' } : { display: 'none' };

    return (
        <div className="infoBox" style={style}>
            {props.name}<br />
            {props.address}
        </div>
    )
}