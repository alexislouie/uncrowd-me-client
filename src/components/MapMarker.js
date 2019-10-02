import React, { Component } from 'react';
import './MapMarker.css';

export default class MapMarker extends Component {

    handleInfoBox() {
        const { name, address, lat, lng } = this.props;
        this.props.showInfoBox(name, address, lat, lng);
    }

    render() {
        const styleHover = {
            fill: 'pink',
            stroke: 'white',
            strokeWidth: '2px'
        };

        const { $hover, $dimensionKey, userLocation, updateHoveredMarker, hoveredCardId, currentHover, text, index } = this.props;

        let style;
        if ($hover && !userLocation) {
            style = styleHover;
            updateHoveredMarker($dimensionKey);
        }
        else {
            style = null;
        }

        if ($dimensionKey === currentHover && !$hover) {
            updateHoveredMarker('');
        }

        if (hoveredCardId === $dimensionKey) {
            style = styleHover;
        }

        if (userLocation) {
            return (
                <div className="userLocation">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="marker userPin">
                        <path class="st0" d="M25.2 2c-7.5 0-13.5 6.1-13.5 13.5 0 7.2 13.1 30.6 13.5 32.4 0.5-1.7 13.5-25.1 13.5-32.3C38.7 8.1 32.7 2 25.2 2zM25.5 20c-3 0-5.5-2.5-5.5-5.5 0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5C31 17.5 28.5 20 25.5 20z" />
                        <path class="st0" d="M25.2 48c0 0 0 0 0-0.1C25.2 48 25.2 48 25.2 48z" />
                    </svg>
                    {text}
                </div>
            )
        } else {
            return (
                <div className="placeMarker" index={index} style={style} onClick={() => this.handleInfoBox()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="marker placePin" style={style}>
                        <path class="st0" d="M25.2 2c-7.5 0-13.5 6.1-13.5 13.5 0 7.2 13.1 30.6 13.5 32.4 0.5-1.7 13.5-25.1 13.5-32.3C38.7 8.1 32.7 2 25.2 2zM25.5 20c-3 0-5.5-2.5-5.5-5.5 0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5C31 17.5 28.5 20 25.5 20z" />
                        <path class="st0" d="M25.2 48c0 0 0 0 0-0.1C25.2 48 25.2 48 25.2 48z" />
                    </svg>
                </div>
            )
        }
    }
}