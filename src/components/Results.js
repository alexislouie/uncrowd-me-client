import React, { Component } from 'react';
import { API_BASE_URL } from '../config'
import Card from './Card';
import GoogleMap from './Map';

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            places: []
        };
    }
    
    componentDidMount() {
        console.log('Results component has mounted')
    }

    componentDidUpdate(prevProps) {
        console.log('Result Component updated!')
        if (this.props.results !== prevProps.results) {
            this.fetchBusyHours();
        }
    }

    fetchBusyHours() {
        console.log('fetchBusyHours called');
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

            fetch(`${API_BASE_URL}/busyHours/${placeId}`,
                { method: 'GET' })
                .then(res => {
                    console.log('making api call');
                    if (!res.ok) {
                        return Promise.reject(res.statusText);
                    }
                    return res.json()
                })
                .then(data => {
                    if (data.message) {
                        refinedPlaceObj['liveStatus'] = data.message;
                        refinedPlaceObj['usualStatus'] = data.message;
                        refinedPlaceObj['livePercentage'] = 0;
                        refinedPlaceObj['usualPercentage'] = 0;

                    } else {
                        if (place.opening_hours.open_now === false) {
                            refinedPlaceObj['openOrClosed'] = 'closed';
                            refinedPlaceObj['livePercentage'] = 0;
                            refinedPlaceObj['liveStatus'] = 'closed';
                            refinedPlaceObj['usualStatus'] = 'closed';

                        } else {
                            // refinedPlaceObj['openOrClosed'] = 'open';
                            if (data.now) {
                                const livePercentage = data.now.percentage;
                                let liveStatus;

                                if (livePercentage <= 50) {
                                    liveStatus = 'not too busy';
                                } else if (livePercentage <= 80) {
                                    liveStatus = 'a little busy';
                                } else {
                                    liveStatus = 'as busy as it gets';
                                }

                                refinedPlaceObj['livePercentage'] = livePercentage;
                                refinedPlaceObj['liveStatus'] = liveStatus;
                            } else {
                                refinedPlaceObj['livePercentage'] = 0;
                                refinedPlaceObj['liveStatus'] = 'unavailable';
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
                                        refinedPlaceObj['usualPercentage'] = usualPercentage;
                                        if (usualPercentage <= 50) {
                                            refinedPlaceObj['usualStatus'] = 'not too busy';
                                        } else if (usualPercentage <= 80) {
                                            refinedPlaceObj['usualStatus'] = 'a little busy';
                                        } else {
                                            refinedPlaceObj['usualStatus'] = 'as busy as it gets';
                                        }
                                    }
                                })
                            } else {
                                refinedPlaceObj['usualStatus'] = 0;
                            }
                        }
                    }
                })
                .then(() => {
                    console.log('refinedPlaceObj: ', refinedPlaceObj)
                    places.push(refinedPlaceObj);

                    if (places.length === this.props.results.places.length) {
                        this.setState({ places })
                    }
                })
        });
    }

    render() {
        const { places } = this.state;
        const { userCoordinates } = this.props.results;
        console.log('userCoordinates: ', userCoordinates)

        if (this.state.places.length === 0) {
            return null;
        }

        const placesAsDomElements = places.map((place, index) =>
            <li key={index}>
                <Card {...place} />
            </li>
        );

        return (
            <div className="results">
                <div className="googleMap">
                    <GoogleMap places={places} userCoordinates={userCoordinates}/>
                </div>
                <div className="listResults">
                    <ul>
                        {placesAsDomElements}
                    </ul>
                </div>
            </div>
        )

    }
}
