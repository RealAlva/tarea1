// src/screens/Product/Product.jsx
import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function Product() {
  const products = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

  return (
    <div>
      <h1>Product List</h1>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default Product;
