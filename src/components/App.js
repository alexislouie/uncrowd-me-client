import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SearchForm from './SearchForm';
import SearchPage from './SearchPage';
import Results from './Results';
import Home from './Home';
import './App.css'
// import LoginPage from './LoginPage';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';


export default function App(props) {
    return (
        <Router>
            <Route render={({ location }) => (

                <div className="app">
                    <header>
                        <h1><Link to="/">Uncrowd Me</Link></h1>
                    </header>
                    <main>
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                classNames="fade"
                                timeout={300}
                            >
                                <Switch location={location}>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/search" component={SearchPage} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </main>
                </div>
            )} />

        </Router>
    );
}