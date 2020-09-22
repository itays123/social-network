import React, { useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import './SearchBar.css';

const SearchBar = () => {
  const { search } = useSearch();
  const [query, setQuery] = useState('');
  return (
    <div className="search-bar flex a-center">
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
    </div>
  );
};

export default SearchBar;
