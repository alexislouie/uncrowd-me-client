// import React, {Component} from 'react';
// import './InfoBox.css';


// export default class InfoBox extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             hidden: false
//         };
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.key === this.props.key) {
//             this.setState({hidden: true})
//         }
//     }

//     render() {
//         const { name, address } = props;

//         const style = name ? { display: 'block' } : { display: 'none' };
//         const view = (props.hide === true) ? 'hide' : 'show';
    
//         return (
//             <div className={`infoBox ${view}`} style={style}>
//                 {name}<br />
//                 {address}
//             </div>
//         )
//     }
// }

import React from 'react';
import './InfoBox.css';


export default function InfoBox(props) {
    const { name, address } = props;

    const style = name ? { display: 'block' } : { display: 'none' };
    const view = (props.hide === true) ? 'hide' : 'show';

    return (
        <div className={`infoBox ${view}`} style={style}>
            {name}<br />
            {address}
        </div>
    )
}