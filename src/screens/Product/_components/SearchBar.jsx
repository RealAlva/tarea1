// src/screens/Product/_components/SearchBar.jsx
import React from 'react';

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <p>
        <input type="checkbox" />{' '}
        Only show products in stock
      </p>
    </form>
  );
}

export default SearchBar;
