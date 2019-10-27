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
        zoom: 14
    };

    constructor() {
        super();
        this.updatehoveredMarkerId = this.updatehoveredMarkerId.bind(this);
    }

    updateClickedMarkerDetails(name, address, lat, lng, key) {
        if (!name) {
            this.props.handleMarkerClick({});
        } else {
            const infoBoxDetails = { name, address, lat, lng, id: key };
            this.props.handleMarkerClick(infoBoxDetails);
        }
        // const infoBoxDetails = { name, address, lat, lng, id: key, hidden };
        // this.props.handleMarkerClick(infoBoxDetails);
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
                            livePercentage={place.livePercentage}
                            liveStatus={place.liveStatus}
                            usualPercentage={place.usualPercentage}
                            usualStatus={place.usualStatus}
                            index={index}
                            hoveredCardId={hoveredCardId}
                            currentHover={currentHover}
                            updateHoveredMarker={this.updatehoveredMarkerId.bind(this)}
                            updateClickedMarkerDetails={this.updateClickedMarkerDetails.bind(this)}
                            clickedMarker={clickedMarker}
                        />
                    ))}

                    <InfoBox {...infoBoxDetails} />

                </GoogleMapReact>
            </div>
        );
    }
}