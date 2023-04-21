import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`/products?page=${currentPage}&perPage=5`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setProducts(data);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, [currentPage]);

  function handlePrevPage() {
    setCurrentPage(prevPage => prevPage - 1);
  }

  function handleNextPage() {
    setCurrentPage(prevPage => prevPage + 1);
  }

  if (loading) {
    return <div className="p-4">Loading products...</div>;
  }

  if (error) {
    return <div className="p-4">Error loading products: {error.message}</div>;
  }

  if (!products || !products.length) {
    return <div className="p-4">No products found</div>;
  }

  return (
    <div className="p-2 overflow-x-scroll  h-screen">
      {products.map(product => (
        <div key={product.id} className="bg-zinc-200  rounded-lg shadow-md p-2 mb-4">
          <img className="h-48 w-48" src={product.imageUrl} alt={product.name}/>
          <h1 className="text-xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-2">Price: ${product.price}</p>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <Link to='/preview'>
            <button className="bg-red-600 mx-2 rounded-lg p-2 text-white">Preview</button>
          </Link>
          <button className="bg-red-600 mx-2 rounded-lg p-2 text-white">Add to Cart</button>
          <button className="bg-red-600 mx-2 rounded-lg p-2 text-white">Delete Product</button>

        </div>
      ))}
      <div className="flex justify-between">
        <button
          className={`bg-gray-200 rounded-md px-4 py-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`bg-gray-200 rounded-md px-4 py-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductList;
