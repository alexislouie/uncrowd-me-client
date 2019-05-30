import React from 'react';
import './Card.css';

export default class Card extends React.Component {

    checkStatus() {
        const livePercentageAsString = `${this.props.livePercentage}%`
        const usualPercentageAsString = `${this.props.usualPercentage}%`
        if (this.props.openOrClosed === 'closed') {
            return (
                <div>
                    <span>Closed</span>
                </div>
            )
        }
        else if (this.props.liveStatus === 'Place has no popular hours') {
            return (
                <div>
                    <strong>Live data & usual data unavailable</strong>
                </div>
            )
        }
        else if (this.props.liveStatus === 'unavailable' && this.props.usualStatus) {
            return (
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td><strong>Usual Status</strong></td>
                                <td>
                                    <svg width="100" height="17">
                                        <defs>
                                            <linearGradient id="colorFill">
                                                <stop offset="0%" stopColor="black" />
                                                <stop offset={usualPercentageAsString} stopColor="black" />
                                                <stop offset={usualPercentageAsString} stopColor="white" />
                                                <stop offset="100%" stopColor="white" />
                                            </linearGradient>
                                        </defs>
                                        <g fill="url(#colorFill)" stroke="black" strokeWidth="2">
                                            <rect width="100" height="17" className="statusBar" />
                                        </g>
                                        Sorry, your browser does not support inline SVG.
                                    </svg>
                                    {this.props.usualStatus}
                                </td>
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
                busyStatus = 'busy as usual'
            }

            return (
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td><strong>Live Status</strong></td>
                                <td>
                                    <svg width="100" height="17">
                                        <defs>
                                            <linearGradient id="liveColorFill">
                                                <stop offset="0%" stopColor="black" />
                                                <stop offset={livePercentageAsString} stopColor="black" />
                                                <stop offset={livePercentageAsString} stopColor="white" />
                                                <stop offset="100%" stopColor="white" />
                                            </linearGradient>
                                        </defs>
                                        <g fill="url(#liveColorFill)" stroke="black" strokeWidth="2">
                                            <rect width="100" height="17" className="statusBar" />
                                        </g>
                                        Sorry, status bar is not supported by your browser.
                                    </svg>
                                    {this.props.liveStatus}
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Usual Status</strong></td>
                                <td>
                                    <svg width="100" height="17">
                                        <defs>
                                            <linearGradient id="usualColorFill">
                                                <stop offset="0%" stopColor="black" />
                                                <stop offset={usualPercentageAsString} stopColor="black" />
                                                <stop offset={usualPercentageAsString} stopColor="white" />
                                                <stop offset="100%" stopColor="white" />
                                            </linearGradient>
                                        </defs>
                                        <g fill="url(#usualColorFill)" stroke="black" strokeWidth="2">
                                            <rect width="100" height="17" className="statusBar" />
                                        </g>
                                        Sorry, status bar is not supported by your browser.
                                    </svg>
                                    {this.props.usualStatus}
                                </td>
                            </tr>
                            <tr>
                                <td>{busyStatus}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="card">
                <strong>Name: </strong> {this.props.name}<br />
                <strong>Address: </strong>{this.props.address}<br />
                {/* Phone: {this.props.phone}<br /> */}
                <strong>Rating: </strong>{this.props.rating} out of {this.props.user_ratings} ratings<br />
                {this.checkStatus()}
                <br />
            </div>
        );
    }
}

Card.defaultProps = {
    text: ''
};