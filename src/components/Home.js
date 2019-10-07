import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home(props) {
    const loader = document.querySelector('.loader');
    loader.classList.add('loader--hide');
    return (
        <div className="home">
            <main>
                <div className="homePage">
                    <h1>Uncrowd Me!</h1>
                    {/* <button className="learnMoreButton">Learn More</button> */}
                </div>
                <div className="about hidden">
                    <h2>Living in the city doesn't always have to feel crowded.</h2>
                    <p>
                        We've all experienced it: elbow-to-elbow crowds at your favorite grocery store on the weekends. Long lines wrapping around the store that only seem to clear out as soon as you've checked out.
                        Finding no available seats when you show up at a cafe to get some work done.
                    </p>
                    <p>
                        Avoid the crowds and avoid the wait. Uncrowd Me shows you the closest places with the smallest crowds near you.
                    </p>

                    <Link to="/search"><button className="searchLinkButton">Get Started!</button></Link>

                </div>
            </main>
        </div >
    );
}


// export default class Home extends React.Component {
//     // constructor(props) {
//     //     super(props)
//     //     this.state = {
//     //         fade: false
//     //     }
//     // }

//     animateExit() {
//         const homePage = document.querySelector('.homePage');
//         homePage.classList.add('.rise-exit');

//     }

//     render() {
//         const loader = document.querySelector('.loader');
//         loader.classList.add('loader--hide');
//         return (
//             <div className="home">
//                 <main>
//                     <TransitionGroup className="transitionOut">
//                         <CSSTransition
//                             timeout={300}
//                             classNames="item"
//                         >
//                             <div className="homePage">
//                                 <h1>Uncrowd Me.</h1>
//                                 {/* <button className="learnMoreButton">Learn More</button> */}
//                             </div>
//                             <div className="about hidden">
//                                 <h2>Living in the city doesn't always have to feel crowded.</h2>
//                                 <p>
//                                     We've all experienced it: the elbow-to-elbow crowds at your favorite grocery store on the weekends. Long lines that wrap around the store that only seem to clear up as soon as you've checked out.
//                                     Realizing there are no seats when you show up at a cafe to get some work done.
//                                 </p>
//                                 <p>
//                                     Avoid the crowds and avoid the wait. Uncrowd Me shows you the closest places with the smallest crowds near you.
//                                 </p>
//                                 {/* <button className="searchLinkButton" onClick={() => this.animateExit()}>Get Started!</button> */}

//                                 <Link to="/search"><button className="searchLinkButton">Get Started!</button></Link>
//                                 {/* <button
//                             ref='button'
//                             onClick={() => this.setState({ fade: true })}
//                             onAnimationEnd={() => this.setState({ fade: false })}
//                             className={fade ? 'fade' : ''}>
//                             Click me!
//                         </button> */}
//                             </div>
//                         </CSSTransition>
//                     </TransitionGroup>
//                 </main>
//             </div>
//         )
//     }
// }