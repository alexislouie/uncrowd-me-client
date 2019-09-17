import React from 'react';
import './Card.css';

// const loader = document.querySelector('.loader');

// const showLoader = () => loader.classList.remove('loader--hide');
// const hideLoader = () => loader.classList.add('loader--hide');

export default class Card extends React.Component {
    // componentDidMount() {
    //     hideLoader();
    // }

    checkStatus() {
        const livePercentageAsString = `${this.props.livePercentage}%`
        const usualPercentageAsString = `${this.props.usualPercentage}%`

        const { liveStatus, usualStatus, livePercentage, usualPercentage, openOrClosed } = this.props;
        const liveStyling = {
            background: `linear-gradient(to right, blue ${livePercentage}%, white 50%)`
        }
        const usualStyling = {
            background: `linear-gradient(to right, blue ${usualPercentage}%, white 50%)`
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
                <div style={usualStyling}>
                </div>
                // <div>
                //     <table>
                //         <tbody>
                //             <tr>
                //                 <td className="statusType"><strong>Usual Status</strong></td>
                //                 <td>
                //                     <svg width="100" height="17">
                //                         <defs>
                //                             <linearGradient id="colorFill">
                //                                 <stop offset="0%" stopColor="black" />
                //                                 <stop offset={usualPercentageAsString} stopColor="black" />
                //                                 <stop offset={usualPercentageAsString} stopColor="white" />
                //                                 <stop offset="100%" stopColor="white" />
                //                             </linearGradient>
                //                         </defs>
                //                         <g fill="url(#colorFill)" stroke="black" strokeWidth="2">
                //                             <rect width="100" height="17" className="statusBar" />
                //                         </g>
                //                         Sorry, your browser does not support inline SVG.
                //                     </svg>
                //                 </td>
                //                 <td>{this.props.usualStatus}</td>
                //             </tr>
                //         </tbody>
                //     </table>
                // </div>
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
                                <td className="statusType"><strong>Live Status</strong></td>
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
                                </td>
                                <td>{this.props.liveStatus}</td>
                            </tr>
                            <tr>
                                <td className="statusType"><strong>Usual Status</strong></td>
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
                                </td>
                                <td>{this.props.usualStatus}</td>
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

    handleCardHover(id) {
        this.props.updateHoverId(id)
    }
    render() {
        const { id, hoveredMarkerId, index, name, address, rating, user_ratings, updateHoverId } = this.props;
        const styleHover = {
            backgroundColor : 'grey',
            color: 'red'
        };
        const cardStyle = {
        };
        const style = (id === hoveredMarkerId) ? styleHover : cardStyle;

        return (
            // <div className="card" index={index} style={style} onMouseEnter={this.handleCardHover(id)} onMouseLeave={updateHoverId('')}>
            <div className="card" index={index} style={style} onMouseEnter={() => this.handleCardHover(id)} onMouseLeave={() => this.handleCardHover('')}>
                <strong>Name: </strong> {name}<br />
                <strong>Address: </strong>{address}<br />
                {/* Phone: {this.props.phone}<br /> */}
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