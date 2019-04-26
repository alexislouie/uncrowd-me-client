import React from 'react';

import SearchForm from './SearchForm';
import Results from './Results';

export default function SearchSection (props) {
    return (
        <section aria-label="Search section">
          <SearchForm onSearch={searchQuery => props.search(searchQuery)}/>
          <Results results={props.results}/>
        </section>
      );
}