import React, { Component } from 'react';
import './MapMarker.css';

export default class MapMarker extends Component {

    handleClick() {
        const { name, address, lat, lng, $dimensionKey, clickedMarker } = this.props;
        if (clickedMarker === $dimensionKey) {
            this.props.updateClickedMarkerDetails(null);
        } else {
            this.props.updateClickedMarkerDetails(name, address, lat, lng, $dimensionKey, {hidden: false});
        }
    }

    render() {
        const styleHover = {
            fill: 'pink',
            stroke: 'white',
            strokeWidth: '2px'
        };

        const {
            $hover,
            $dimensionKey,
            userLocation,
            updateHoveredMarker,
            hoveredCardId,
            currentHover,
            text,
            index,
            liveStatus,
            usualStatus,
            clickedMarker } = this.props;

        let style;

        // userLocation's color does not change when hovered
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

        // if card is highlihted, associated marker style changes
        if (hoveredCardId === $dimensionKey) {
            style = styleHover;
        }

        // adjust color according to busy-ness
        let busyColor;
        if (liveStatus === 'not too busy') {
            busyColor = 'notBusy';
        } else if (liveStatus === 'a little busy') {
            busyColor = 'aLittleBusy';
        } else if (liveStatus === 'as busy as it gets') {
            busyColor = 'reallyBusy';
        } else if (liveStatus === 'closed') {
            busyColor = 'unavailable';
        } else if (liveStatus === 'unavailable') {
            if (usualStatus === 'not too busy') {
                busyColor = 'notBusy';
            } else if (usualStatus === 'a little busy') {
                busyColor = 'aLittleBusy';
            } else if (usualStatus === 'as busy as it gets') {
                busyColor = 'reallyBusy';
            } else if (usualStatus === 'closed' || usualStatus === 0) {
                busyColor = 'unavailable';
            }
        }

        if (userLocation) {
            return (
                <div className="marker userLocation">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="userPin">
                        <path className="st0" d="M25.2 2c-7.5 0-13.5 6.1-13.5 13.5 0 7.2 13.1 30.6 13.5 32.4 0.5-1.7 13.5-25.1 13.5-32.3C38.7 8.1 32.7 2 25.2 2zM25.5 20c-3 0-5.5-2.5-5.5-5.5 0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5C31 17.5 28.5 20 25.5 20z" />
                        <path className="st0" d="M25.2 48c0 0 0 0 0-0.1C25.2 48 25.2 48 25.2 48z" />
                    </svg>
                    {text}
                </div>
            )
        } else {
            return (
                <div className="marker placeMarker" index={index} onClick={() => this.handleClick()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className={` placePin ${busyColor} ${(clickedMarker === $dimensionKey) ? "jump selected" : ""} `} style={style}>
                        <path className="st0" d="M25.2 2c-7.5 0-13.5 6.1-13.5 13.5 0 7.2 13.1 30.6 13.5 32.4 0.5-1.7 13.5-25.1 13.5-32.3C38.7 8.1 32.7 2 25.2 2zM25.5 20c-3 0-5.5-2.5-5.5-5.5 0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5C31 17.5 28.5 20 25.5 20z" />
                        <path className="st0" d="M25.2 48c0 0 0 0 0-0.1C25.2 48 25.2 48 25.2 48z" />
                    </svg>
                </div>
            )
        }
    }
}