// SearchBar.js
import React from 'react';

function SearchBar () {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Search..."
        style={{ padding: '10px', borderRadius: '5px', width: '300px' }}
      />
      <button style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px' }}>Search</button>
    </div>
  );
};

export default SearchBar;
