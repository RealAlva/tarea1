// src/screens/Product/Product.jsx
import React, { useState } from 'react';
import SearchBar from './_components/SearchBar';
import ProductTable from './_components/ProductTable';


function Product() {
  // Estado para la búsqueda y el filtrado de productos
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  // Datos de los productos
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

  // Funciones de manejo de estado
  const handleFilterTextChange = (text) => {
    setFilterText(text);
  };

  const handleInStockChange = (inStock) => {
    setInStockOnly(inStock);
  };

  // Renderización del componente principal
  return (
    <div>
      <h1>Product List</h1>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default Product;
