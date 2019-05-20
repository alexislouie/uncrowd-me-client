import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SearchForm from './SearchForm';
import SearchPage from './SearchPage';
import Results from './Results';
import Home from './Home';
// import LoginPage from './LoginPage';

export default function App(props) {
  return (
      <Router>
          <div className="app">
              {/* <header>
                  <h1><Link to="/">Uncrowd Me</Link></h1>
              </header> */}
              <main>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/search" component={SearchPage} />
                  <Route exact path="/search/:query/:address" components={{searchForm: SearchForm, main: Results}} />
                  {/* <Route exact path="/" component={LoginPage} /> */}
                  <Link to="/search">Search</Link>
              </main>
          </div>
      </Router>
  );
}