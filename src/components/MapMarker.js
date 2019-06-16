import React from 'react';
import './MapMarker.css';


export default function MapMarker(props) {
    if (props.userLocation) {
        return (
            <div className="userLocation">
                {props.text}
            </div>
        )

    } else {
        return(
            <div className="placeMarker">
            </div>
        )
    }
    // return (
    //     <div className="marker">
    //         {props.text}
    //     </div>
    // );
}