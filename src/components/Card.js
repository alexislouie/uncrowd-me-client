import React from 'react';
import './Card.css';

export default class Card extends React.Component {

    checkStatus() {
        const { liveStatus, usualStatus, livePercentage, usualPercentage, openOrClosed } = this.props;

        const liveStyling = {
            width: '100px',
            height: '17px',
            border: '1px solid black',
            background: `linear-gradient(to right, black, black ${livePercentage}%, white ${livePercentage}%, white 100%)`
        }
        const usualStyling = {
            width: '100px',
            height: '17px',
            border: '1px solid black',
            background: `linear-gradient(to right, black, black ${usualPercentage}%, white ${usualPercentage}%, white 100%)`
        }
        if (openOrClosed === 'closed') {
            return (
                <div>
                    <span>Closed</span>
                </div>
            )
        }
        else if (liveStatus === 'Place has no popular hours') {
            return (
                <div>
                    <strong>Live data & usual data unavailable</strong>
                </div>
            )
        }
        else if (liveStatus === 'unavailable' && usualStatus) {
            return (
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="statusType"><strong>Usual Status</strong></td>
                                <td>
                                    <div style={usualStyling}>
                                    </div>
                                </td>
                                <td>{this.props.usualStatus}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
        else {
            let busyStatus;
            if (this.props.livePercentage < this.props.usualPercentage) {
                busyStatus = 'less busy than usual';
            } else if (this.props.livePercentage > this.props.usualPercentage) {
                busyStatus = 'busier than usual';
            } else {
                busyStatus = 'busy as usual';
            }

            return (
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td className="statusType"><strong>Live Status</strong></td>
                                <td>
                                    <div style={liveStyling}>
                                    </div>
                                </td>
                                <td>{this.props.liveStatus}</td>
                            </tr>
                            <tr>
                                <td className="statusType"><strong>Usual Status</strong></td>
                                <td>
                                    <div style={usualStyling}>
                                    </div>
                                </td>
                                <td>{this.props.usualStatus}</td>
                            </tr>
                        </tbody>
                    </table>
                    {busyStatus}
                </div>
            )
        }
    }

    handleCardHover(id) {
        this.props.updateHoverId(id)
    }

    handleClick(name, address, lat, lng, id) {
        const clickedCardDetails = { name, address, lat, lng, id };
        if (this.props.clickedCard.id === this.props.id) {
            this.props.updateClicked({});
        } else {
            this.props.updateClicked(clickedCardDetails);
        }
        // this.props.updateClicked(clickedCardDetails);
    }
    render() {
        const { id, hoveredMarkerId, index, name, address, rating, user_ratings, lat, lng } = this.props;
        const styleHover = {
            boxShadow: '2px 2px 5px black'
        };
        const cardStyle = {
        };
        const style = (id === hoveredMarkerId) ? styleHover : cardStyle;
        return (
            <div className="card"
                index={index}
                style={style}
                onMouseEnter={() => this.handleCardHover(id)}
                onMouseLeave={() => this.handleCardHover('')}
                onClick={() => this.handleClick(name, address, lat, lng, id)}>
                <strong>{name}</strong><br />
                <strong>Address: </strong>{address}<br />
                <strong>Rating: </strong>{rating} out of {user_ratings} ratings<br />
                {this.checkStatus()}

                <br />
            </div>
        );
    }
}

Card.defaultProps = {
    text: ''
};