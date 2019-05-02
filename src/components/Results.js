import React, { Component } from 'react';
import { API_BASE_URL } from '../config'
import Card from './Card';

export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            places: []
        };
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
        this.props.results.forEach(place => {
            const placeId = place.place_id;

            if (place.opening_hours.open_now === false) {
                place['openOrClosed'] = 'closed';
            } else {
                place['openOrClosed'] = 'open';
            }

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
                        place['error'] = data.message;
                    }
                    else {
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

                            place['livePercentage'] = livePercentage;
                            place['liveStatus'] = liveStatus;
                        } else {
                            place['livePercentage'] = 'unavailable';
                            place['liveStatus'] = 'unavailable';
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
                                    place['usualPercentage'] = usualPercentage;
                                    if (usualPercentage <= 50) {
                                        place['usualStatus'] = 'not too busy';
                                    } else if (usualPercentage <= 80) {
                                        place['usualStatus'] = 'a little busy';
                                    } else {
                                        place['usualStatus'] = 'as busy as it gets';
                                    }
                                }
                                // sometimes the current hour isn't listed in the data 
                                // also, IF the store/place is closed, usual and live status shouldn't be shown anyway 
                            })
                        } else {
                            place['usualStatus'] = 'unavailable';
                        }
                    }

                })
                .then(() => {
                    places.push(place);

                    if (places.length === this.props.results.length) {
                        this.setState({ places })
                    }
                })
        });

    }

    render() {
        const { places } = this.state;

        if (this.state.places.length === 0) {
            return null;
        }

        const placesAsDomElements = places.map((place, index) =>
            <li key={index}>
                <Card {...place} />
            </li>
        );

        return (
            <div>
                <ul>
                    {placesAsDomElements}
                </ul>
            </div>
        )

    }
}
