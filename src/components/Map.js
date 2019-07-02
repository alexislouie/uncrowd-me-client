import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';
import './Results.css';

const handleApiLoaded = (map, maps) => {
    // use map and maps objects
};

export default class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 40.7831,
            lng: -73.9712
        },
        zoom: 13
    };

    render() {
        const { places, userCoordinates, zoom } = this.props;

        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBmA40LNSpv2kVlUf8Byn-YW6W_ji6zuMY' }}
                    defaultCenter={userCoordinates}
                    defaultZoom={zoom}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >

                    <MapMarker
                        lat={userCoordinates[0]}
                        lng={userCoordinates[1]}
                        userLocation={true}
                        text="Your location"
                    />

                    {places.map(place => (
                        <MapMarker
                            key={place.id}
                            lat={place.lat}
                            lng={place.lng}
                        />
                    ))}

                </GoogleMapReact>
            </div>
        );
    }
}