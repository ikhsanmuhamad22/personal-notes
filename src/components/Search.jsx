import { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ title, onSearchChange }) => {
  const [search, setSearch] = useState('');
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    onSearchChange(value);
  };
  return (
    <div className="p-3">
      <h1>{title}</h1>
      <input
        className="border border-black my-3 w-full h-8 shadow-md p-2"
        type="search"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};

Search.propTypes = {
  title: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Search;
