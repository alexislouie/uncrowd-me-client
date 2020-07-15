import React from 'react';
import './Loader.css';

export default function Loader(props) {
    const { showLoader } = props;
    const style = showLoader ? { display: 'inline' } : { display: 'none' };
    return (
        <div className="loader" style={style}></div>
    )
}