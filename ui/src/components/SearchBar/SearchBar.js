import React, { useState, useRef } from 'react';
import { useSearch } from '../../hooks/useSearch';
import Hovering from '../Hovering/Hovering';
import UserList from '../UserList/UserList';
import './SearchBar.css';

const SearchBar = () => {
  const { search, results, clear } = useSearch();
  const [query, setQuery] = useState('');
  const ref = useRef({ getBoundingClientRect: () => ({ x: 0, y: 0 }) });
  return (
    <div className="search-bar flex a-center" ref={ref}>
      <form
        onSubmit={e => {
          e.preventDefault();
          search(query);
        }}
      >
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search..."
        />
      </form>
      {results.length > 0 && (
        <Hovering element={ref} onDismiss={clear}>
          <UserList users={results} />
        </Hovering>
      )}
    </div>
  );
};

export default SearchBar;
