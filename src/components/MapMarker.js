import React, { Component } from 'react';
import './MapMarker.css';

export default class MapMarker extends Component {
    constructor(props) {
        super(props);

    }

    handleInfoBox() {
        const { name, address, lat, lng } = this.props;
        this.props.showInfoBox(name, address, lat, lng)
    }

    render() {
        const markerStyle = {
            width: '7px',
            height: '7px',
            backgroundColor: 'blue'
        };

        const styleHover = {
            width: '10px',
            height: '10px',
            backgroundColor: 'blue',
            border: '2px solid green'
        };

        const { $hover, $dimensionKey, userLocation, updateHoveredMarker, hoveredCardId, currentHover, text, index } = this.props;

        let style; 
        if ($hover && !userLocation) {
            style = styleHover;
            updateHoveredMarker($dimensionKey);
        } 
        else {
            style = markerStyle;
        }

        if ($dimensionKey === currentHover && !$hover) {
            updateHoveredMarker('');
        }

        if (hoveredCardId === $dimensionKey) {
            style = styleHover;
        } 

        if (userLocation) {
            return (
                <div className="marker userLocation">
                    {text}
                </div>
            )
        } else {
            return (
                <div className="marker placeMarker" index={index} style={style} onClick={() => this.handleInfoBox()}>
                </div>
            )
        }
    }
}