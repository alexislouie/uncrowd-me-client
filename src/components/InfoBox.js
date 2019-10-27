import React from 'react';
import './InfoBox.css';

export default function InfoBox(props) {
    const { name, address } = props;
    const style = name ? { display: 'block' } : { display: 'none' };

    return (
        <div className="infoBox" style={style}>
            <b>{name}</b><br />
            {address}
        </div>
    )
}