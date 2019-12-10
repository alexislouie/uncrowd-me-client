import React, { Component } from 'react';
import './Home.css';
import HomeSearchForm from './HomeSearchForm'

export default class Home extends Component {
    render() {
        const loader = document.querySelector('.loader');
        loader.classList.add('loader--hide');
        
        return (
            <div className="homePage">
                <main>
                    <div className="welcomeScreen">
                        {/* <div className="logo"> */}
                            <svg className="svgLogo" data-name="Layer 1" viewBox="0 0 425.99 452.1" xmlns="http://www.w3.org/2000/svg">
                                <circle className="cls-1" cx="191" cy="222.18" r="191" />
                                <polygon className="cls-2" points="391.14 210.33 337.92 188.28 336.34 238.79 303.9 204.42 274.66 250.05 257.46 192.68 213.53 195.71 239.22 148.14 192.4 120.57 256.48 119.28 224.14 58.62 291.54 103.25 298.86 31.08 321.8 99.53 364.76 65.77 351.31 118.89 422.85 124.26 362.85 158.69" />
                                <path className="cls-3" transform="translate(-20 -6.82)" d="M280.26,237.05A131.83,131.83,0,0,1,267,275.67l-28.24-25.89,20.41-43Z" />
                                <text className="cls-4" transform="matrix(.95 .32 -.32 .95 258.22 168.74)">!!!</text>
                                <path className="cls-3" transform="translate(-20 -6.82)" d="m206.55 419.93c7.93 25.75 2.69 35.06-15.7 38.64-30.48 4.45-33.42-34.74-35.75-39.25" />
                                <path className="cls-3" transform="translate(-20 -6.82)" d="m271.4 393.44c8.83 37.63 3.84 46-14.55 49.57-30.48 4.45-31-22.5-33.3-27" />
                                <path className="cls-3" transform="translate(-20 -6.82)" d="M164.73,112.15c-7.31-3.61-49,4-63.41,22.6A63.89,63.89,0,0,1,87,128c-9.32-6.09-19.35-18.3-39.88-14.19-3.33.66-13.71-3.13-13.8,1.86-.31,15.51,12.89,29.15,25.74,34.2,11.29,4.43,21.61-4.27,22.41,1.17s-3.24,61.63.82,66.59c1.85,2.26-45.74,52.27,2,89.77,6.93,35.12,16.87,123.18,106.78,114.5,178.58-17.24,64.36-168.39,64.36-168.39,7.62-2,20.77-7.86,27-12.84,21.42-17-10.24-40.71-15.69-42.74-1-.39,13.34,4.22,15.71,1,5.58-7.49-2.55-21.31-4.74-24.88-2.32-3.79-.3-7.35-3.3-11.19-6.11-7.81-17.7-14.1-28.22-18.12-.49-4.23-5.86-20.78-6.29-20.21,0,0-32.74,27-40-7.5C199.91,117,177.86,125.14,164.73,112.15Z" />
                                <path className="cls-5" transform="translate(-20 -6.82)" d="m245.81 142.57" />
                                <path className="cls-6" transform="translate(-20 -6.82)" d="m163 145.76" />
                                <path className="cls-7" transform="translate(-20 -6.82)" d="m162.82 148.56c6.15-26.46 3.69-47.15-0.29-67.32-0.39-2.07 3.06 2.12 3.67 2.9 16.21 20.86 19.63 39.67 11.69 57.22-4.23-0.65-5.3 0.8-15.07 7.2z" />
                                <path className="cls-8" transform="translate(-20 -6.82)" d="M126.55,188.47a5.67,5.67,0,0,1,3.43-2.65,21.49,21.49,0,0,1,5.3-1.5c3.51-.39,7.1,1.11,10.51-.2.27-.11.51-.45.3-.74l-3.59-4.86c-.37-.51-1.24,0-.86.51l3.59,4.86.3-.74a12,12,0,0,1-5.63.36,19.18,19.18,0,0,0-5.66,0,25.9,25.9,0,0,0-5.23,1.67,6,6,0,0,0-3.33,2.83c-.26.58.6,1.09.87.5Z" />
                                <path className="cls-8" transform="translate(-20 -6.82)" d="M129.14,197.27c4.1-5.68,10.25-9.34,16.18-12.84a.5.5,0,0,0-.51-.86c-6.08,3.59-12.32,7.36-16.53,13.19-.38.53.49,1,.86.51Z" />
                                <path className="cls-9" transform="translate(-20 -6.82)" d="m178.88 209a20.39 20.39 0 0 1 16-4c-5.32-14.2-14.64-9.5-16 4z" />
                                <path className="cls-10" transform="translate(-20 -6.82)" d="m111.21 263.39 21.52-35.39c4.15-17.28-22.37-39-39-23.22l-11.45 12.8" />
                                <path className="cls-10" transform="translate(-20 -6.82)" d="m141.43 276.22q-14.34-12.57-27.59-17.66" />
                                <path className="cls-11" transform="translate(-20 -6.82)" d="m272.27 170.94c0.68-4.53 2.55-5.18 4.35-4.52 0 0 0 6.73-0.17 4.22s-2.4-1.3-4.18 0.3z" />
                                <path className="cls-6" transform="translate(-20 -6.82)" d="m177.83 171.39" />
                                <path className="cls-12" transform="translate(-20 -6.82)" d="m181.08 167c4.43-3.33 17.35-13 27.81-15.17 7.7-1.61 21.54-5.41 28.76-8.65 3.38-1.52 8.86-0.18 8.56 1.53 0.69-6.25 0.45-8.38-3.79-18.35-1.68-3.94-6.68-9.56-8.76-14.29-14.61-33.24-56.17-103-71-105.27-4.25 0.44 3.47 16.17 7.24 26.74 2.61 7.33 4.3 34.08 5.77 54.75 1.23 17.34-5 40.68-5.9 54.79-0.82 13.41 5.88 23.33 9.26 25.33 0.83 0.49 1.91-1.27 2.05-1.41z" />
                                <path className="cls-10" transform="translate(-20 -6.82)" d="m271.39 278.82a163.64 163.64 0 0 0-13-20.23c-20.24 6.64-49.17 10.46-63.61 6-29.13-9.09-35.23-20.43-35.23-20.43" />
                                <path className="cls-10" transform="translate(-20 -6.82)" d="m258.38 258.59c5.8-2.81 12.93-8.12 20.55-15.1" />
                                <path className="cls-10" transform="translate(-20 -6.82)" d="m166.34 229.77c3.11-1.56 4.93-2.61 8.79-2.44" />
                                <path className="cls-11" transform="translate(-20 -6.82)" d="m230.2 252.14c27.8-15.14 34.19-13.33 43.37-15.23 24.53-5.07-4.44-38.31-11.17-38.4-14.76-0.18-37.22 11.22-64.33 27.74-4.32 2.64-15.54 0.76-23.18 1.16-3.69 0.2 29.27 38.94 55.31 24.73z" />
                                <path className="cls-13" transform="translate(-20 -6.82)" d="m261.78 198.05" />
                            </svg>
                        {/* </div> */}
                        <h1>Uncrowd Me!</h1>
                    </div>
                    <HomeSearchForm />
                    <div className="infobox intro">
                        <div className="intro-img">

                        </div>
                        <div className="intro-text">
                            <h2>We've all experienced it</h2>
                            <p>
                                The elbow-to-elbow crowds at your favorite grocery store. Long lines wrapping around the block at that restaraunt you're meeting your friends at.
                                The lack of seating at your local cafe when you just need to get some work done.
                            </p>
                        </div>
                    </div>
                    <div className="infobox about">
                        <h2>Avoid the crowds. Avoid the wait.</h2>
                        <p>
                            Uncrowd Me shows you the closest places with the smallest crowds near you.
                        </p>
                    </div>
                </main>
            </div >
        )
    }
}