import React, { Component } from "react";
import { connect } from "react-redux";

import { updateHoverMarkerId, updateHoverCardId, clickMapMarker, updatePlaces } from '../actions'

import { API_BASE_URL } from "../config";
import Card from "./Card";
import GoogleMap from "./Map";

export class Results extends Component {

    componentDidUpdate(prevProps) {
        console.log('results has updated')
        if (this.props.results !== prevProps.results) {
            this.fetchBusyHours();
        }
    }

    fetchBusyHours() {
        const places = [];
        this.props.results.places.forEach(place => {
            const placeId = place.place_id;
            let refinedPlaceObj = {
                name: place.name,
                id: place.place_id,
                address: place.formatted_address,
                rating: place.rating,
                user_ratings: place.user_ratings_total,
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng
            };

            fetch(`${API_BASE_URL}/busyHours/${placeId}`, { method: "GET" })
                .then(res => {
                    if (!res.ok) {
                        return Promise.reject(res.statusText);
                    }
                    return res.json();
                })
                .then(data => {
                    if (data.message) {
                        refinedPlaceObj["liveStatus"] = data.message;
                        refinedPlaceObj["usualStatus"] = data.message;
                        refinedPlaceObj["livePercentage"] = 0;
                        refinedPlaceObj["usualPercentage"] = 0;
                    } else {
                        if (!place.opening_hours) {
                            refinedPlaceObj["livePercentage"] = 0;
                            refinedPlaceObj["liveStatus"] = "unavailable";
                            refinedPlaceObj["usualPercentage"] = 0;
                            refinedPlaceObj["usualStatus"] = "unavailable";

                        } else {
                            if (place.opening_hours.open_now === false) {
                                refinedPlaceObj["openOrClosed"] = "closed";
                                refinedPlaceObj["livePercentage"] = 0;
                                refinedPlaceObj["liveStatus"] = "closed";
                                refinedPlaceObj["usualStatus"] = "closed";
                            } else {
                                // refinedPlaceObj['openOrClosed'] = 'open';
                                if (data.now) {
                                    const livePercentage = data.now.percentage;
                                    let liveStatus;

                                    if (livePercentage <= 50) {
                                        liveStatus = "not too busy";
                                    } else if (livePercentage <= 80) {
                                        liveStatus = "a little busy";
                                    } else {
                                        liveStatus = "as busy as it gets";
                                    }

                                    refinedPlaceObj["livePercentage"] = livePercentage;
                                    refinedPlaceObj["liveStatus"] = liveStatus;
                                } else {
                                    refinedPlaceObj["livePercentage"] = 0;
                                    refinedPlaceObj["liveStatus"] = "unavailable";
                                }

                                // Account for Google's popular times including 12 AM to 3 AM in the previous day's data
                                const currentDate = new Date();
                                let currentDay = currentDate.getDay();
                                const currentHour = currentDate.getHours();

                                if (currentHour === 0 || currentHour === 1 || currentHour === 2 || currentHour === 3) {
                                    currentDay = currentDate.getDay() - 1;
                                    if (currentDay === -1) {
                                        currentDay = 6;
                                    }
                                }
                                const hoursDataForCurrentDay = data.week[currentDay].hours;
                                if (hoursDataForCurrentDay) {
                                    hoursDataForCurrentDay.forEach(hour => {
                                        if (hour.hour === currentHour) {
                                            const usualPercentage = hour.percentage;
                                            refinedPlaceObj["usualPercentage"] = usualPercentage;
                                            if (usualPercentage <= 50) {
                                                refinedPlaceObj["usualStatus"] = "not too busy";
                                            } else if (usualPercentage <= 80) {
                                                refinedPlaceObj["usualStatus"] = "a little busy";
                                            } else {
                                                refinedPlaceObj["usualStatus"] = "as busy as it gets";
                                            }
                                        }
                                    });
                                } else {
                                    refinedPlaceObj["usualStatus"] = "unavailable";
                                }
                            }
                        }
                    }
                })
                .then(() => {
                    places.push(refinedPlaceObj);
                    if (places.length === this.props.results.places.length) {
                        this.props.dispatch(updatePlaces(places))
                        this.props.showLoader(false);
                    }
                })
        });
    }

    handleHoveredMarker(id) {
        if (this.props.hoveredMarkerId !== id) {
            this.props.dispatch(updateHoverMarkerId(id))
        }
    }

    handleHoveredCard(hoveredCardId) {
        if (this.props.hoveredCardId !== hoveredCardId) {
            this.props.dispatch(updateHoverCardId(hoveredCardId))
        }
    }

    handleMarkerClick(clickedMarkerDetails) {
        if (this.props.clickedMarkerDetails !== clickedMarkerDetails) {
            this.props.dispatch(clickMapMarker(clickedMarkerDetails))
        }
    }

    render() {
        const {
            places,
            hoveredMarkerId,
            hoveredCardId,
            clickedMarkerDetails
        } = this.props;
        const { userCoordinates } = this.props.results;

        if (this.props.places.length === 0) {
            return null;
        }

        const placesAsDomElements = places.map((place, index) => (
            <li key={index}>
                <Card
                    {...place}
                    hoveredMarkerId={hoveredMarkerId}
                    updateHoverId={this.handleHoveredCard.bind(this)}
                    updateClicked={this.handleMarkerClick.bind(this)}
                    clickedCard={clickedMarkerDetails}
                    index={index}
                />
            </li>
        ));

        return (
            <div className="results">
                <div className="googleMap">
                    <GoogleMap
                        places={places}
                        userCoordinates={userCoordinates}
                        hoveredCardId={hoveredCardId}
                        currentHover={hoveredMarkerId}
                        updateHoveredMarker={this.handleHoveredMarker.bind(this)}
                        handleMarkerClick={this.handleMarkerClick.bind(this)}
                        infoBoxDetails={clickedMarkerDetails}
                        clickedMarker={clickedMarkerDetails.id}
                    />
                </div>
                <div className="listResults">
                    <ul>{placesAsDomElements}</ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
    places: state.places,
    hoveredMarkerId: state.hoveredMarkerId,
    hoveredCardId: state.hoveredCardId,
    clickedMarkerDetails: state.clickedMarkerDetails
})

export default connect(mapStateToProps)(Results);