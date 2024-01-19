import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

const Search = ({ title, onSearchChange }) => {
  const [search, setSearch] = useState('');
  const [searchUrl, setSearchUrl] = useSearchParams({ keyword: '' });

  useEffect(() => {
    const urlKeyword = searchUrl.get('keyword');
    if (urlKeyword !== search) {
      setSearch(urlKeyword || '');
      onSearchChange(urlKeyword || '');
    }
  }, [searchUrl, onSearchChange, search]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchUrl({ keyword: value });
  };
  return (
    <div className="p-3">
      <h1>{title}</h1>
      <input
        className="border bg-light border-black my-3 w-full h-8 shadow-md p-2"
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
