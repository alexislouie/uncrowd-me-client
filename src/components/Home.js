import React, { Component } from 'react';
import './Home.css';
import HomeSearchForm from './HomeSearchForm'

export default class Home extends Component {
    render() {
        const loader = document.querySelector('.loader');
        loader.classList.add('loader--hide');
        return (
            <div className="home">
                <main>
                    <div className="homePage">
                        <h1>Uncrowd Me!</h1>
                    </div>
                    <HomeSearchForm />
                    <div className="about hidden">
                        <h2>Living in the city doesn't always have to feel crowded.</h2>
                        <p>
                            We've all experienced it: elbow-to-elbow crowds at your favorite grocery store on the weekends. Long lines wrapping around the store that only seem to clear out as soon as you've checked out.
                            Finding no available seats when you show up at a cafe to get some work done.
                        </p>
                        <p>
                            Avoid the crowds and avoid the wait. Uncrowd Me shows you the closest places with the smallest crowds near you.
                        </p>
                    </div>
                </main>
            </div >
        )
    }
}