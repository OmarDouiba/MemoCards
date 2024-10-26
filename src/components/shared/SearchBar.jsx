import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ SearchIcon }) {
  return (
    <>
      <input
        type="text"
        placeholder="Type a question..."
        className="py-2 pl-14  w-full outline-none border-solid border-2 border-orange-400 rounded-xl  "
      />
      <button className="absolute  text-gray-500  left-3 top-1/2  transform -translate-y-1/2">
        <img src={SearchIcon} alt="Search Icon" className="h-5 w-5" />
      </button>
    </>
  );
}

SearchBar.prototype = {
  SearchBar: PropTypes.string.isRequired,
};

export default SearchBar;
