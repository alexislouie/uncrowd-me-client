import React from 'react';
import './Home.css';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function Home(props) {
    return (
        <div className="home">
            <main>
                <div className="homePage">
                    <h1>Uncrowd Me.</h1>
                    <button className="learnMoreButton">Learn More</button>
                </div>
                <div className="about hidden">
                    <h2>Living in the city doesn't always have to feel crowded.</h2>
                    <p>
                        We've all experienced it: the elbow-to-elbow crowds at your favorite grocery store on the weekends. Long lines that wrap around the store that only seem to clear up as soon as you've checked out.
                        Realizing there are no seats when you show up at a cafe to get some work done. 
                    </p>
                    <p>
                        Avoid the crowds and avoid the wait. Uncrowd Me shows you the closest places with the smallest crowds near you. 
                    </p>
                </div>
            </main>
        </div>
    );
}