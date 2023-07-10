import React, { useState, useCallback } from 'react';

function SearchBar(props){
  const [term, setTerm] = useState('');

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

  return(
    <div>
      <input type="text" placeholder="Enter Song Title" onChange={handleTermChange} />
      <button className='SearchButton' onClick={search}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;