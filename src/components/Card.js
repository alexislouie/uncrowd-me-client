import React from 'react';

export default class Card extends React.Component {

    checkStatus() {
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
                    <span>Live data unavailable</span>
                </div>
            )
        }
        else if (this.props.liveStatus === 'unavailable' && this.props.usualStatus) {
            return (
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Usual Status</td>
                                <td>
                                    <svg width="100" height="15">
                                        <rect width={this.props.usualPercentage} height="15" />
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
            } else  {
                busyStatus = 'busy as usual'
            }

            return (
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Live Status</td>
                                <td>
                                    <svg width="100" height="15">
                                        <rect width={this.props.livePercentage} height="15" />
                                        Sorry, status bar is not supported by your browser.
                                    </svg>
                                    {this.props.liveStatus}
                                </td>
                            </tr>
                            <tr>
                                <td>Usual Status</td>
                                <td>
                                    <svg width="100" height="15">
                                        <rect width={this.props.usualPercentage} height="15" />
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
            <div>
                Name: {this.props.name}<br />
                Address: {this.props.address}<br />
                {/* Phone: {this.props.phone}<br /> */}
                Rating: {this.props.rating} out of {this.props.user_ratings_total} ratings<br />
                {this.checkStatus()}
                <br />
            </div>
        );
    }
}

Card.defaultProps = {
    // text: ''
};




// import React from 'react';

// export default function Card(props) {
//     // export default function Card () {
//     //     showGreeting() {
//     //       return props.greeting ? <p>{props.greeting}</p> : ''
//     //     }

//     //     return (
//     //       <div>
//     //         <h1>Hi</h1>
//     //         {showGreeting()}
//     //       </div>
//     //     )
//     //   } 
//     return (
//         <div>
//             Name: {props.name}<br />
//             Address: {props.address}<br />
//             Live Status: {props.liveStatus}<br />
//             <svg width="100" height="20">
//                 <rect width={props.livePercentage} height="20" />
//                 Sorry, your browser does not support inline SVG.
//             </svg>
//             <br />
//             Usual Status: {props.usualStatus}<br />
//             Rating: {props.rating} out of {props.user_ratings} ratings<br />
//             <br />
//         </div>
//     );
// }

// Card.defaultProps = {
//     // text: ''
// };