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
            lat: 40.7112334,
            lng: -73.9570399
        },
        zoom: 13
    };

    render() {
        const { places } = this.props;
        
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBmA40LNSpv2kVlUf8Byn-YW6W_ji6zuMY' }}
                    defaultCenter={this.props.userCoordinates}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals={true}
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >

                    {places.map(place => (
                        <MapMarker
                            key={place.id}
                            lat={place.lat}
                            lng={place.lng}
                        />
                    ))}

                    <MapMarker
                        lat={this.props.userCoordinates.lat}
                        lng={this.props.userCoordinates.lng}
                        userLocation={true}
                        text="Your location"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}