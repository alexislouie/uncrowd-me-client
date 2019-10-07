import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';
import './Results.css';
import InfoBox from './InfoBox';

export default class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 40.7831,
            lng: -73.9712
        },
        zoom: 13
    };

    constructor() {
        super();
        this.updatehoveredMarkerId = this.updatehoveredMarkerId.bind(this);
    }

    showInfoBox(name, address, lat, lng, key) {
        const infoBoxDetails = { name, address, lat, lng, key};
        this.props.handleMarkerClick(infoBoxDetails);
    }

    updatehoveredMarkerId(value) {
        this.props.updateHoveredMarker(value);
    }

    render() {
        const { places, userCoordinates, zoom, hoveredCardId, currentHover, infoBoxDetails, clickedMarker } = this.props;

        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBmA40LNSpv2kVlUf8Byn-YW6W_ji6zuMY' }}
                    defaultCenter={userCoordinates}
                    defaultZoom={zoom}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onChildClick={this.handleMarkerClick}
                >

                    <MapMarker
                        lat={userCoordinates[0]}
                        lng={userCoordinates[1]}
                        userLocation={true}
                        text="Your location"
                        hoverDistance={15}
                    />

                    {places.map((place, index) => (
                        <MapMarker
                            key={place.id}
                            name={place.name}
                            address={place.address}
                            lat={place.lat}
                            lng={place.lng}
                            index={index}
                            hoveredCardId={hoveredCardId}
                            currentHover={currentHover}
                            updateHoveredMarker={this.updatehoveredMarkerId.bind(this)}
                            showInfoBox={this.showInfoBox.bind(this)}
                            clickedMarker={clickedMarker}
                        />
                    ))}

                        <InfoBox {...infoBoxDetails} />
                        
                </GoogleMapReact>
            </div>
        );
    }
}