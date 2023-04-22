import React, { useState, useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';


function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory()
  const [showActions,setShowActions] = useState(false)


  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`/products?page=${currentPage}&perPage=5&sort=-createdAt`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setProducts(data);
        setTotalPages(data.totalPages);
        setLoading(false);
        setCurrentPage(1); // Reset currentPage to 1 after fetching sorted products
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
  function handleDelete(product) {
    // Make a copy of the current list of products
    const newProducts = [...products];
    
    // Find the index of the product to be deleted
    const index = newProducts.findIndex((i) => i.id === product.id);
    
    // Remove the product from the list
    newProducts.splice(index, 1);
    
    // Update the state of the parent component with the new list of products
    setProducts(newProducts);
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
        <div key={product.id} className="bg-zinc-200 hover:bg-zinc-100 hover:font-semibold  rounded-lg shadow-md p-2 mb-4" onClick={()=>{
          history.push(`/singleproduct`) 
     }} onMouseEnter ={()=> setShowActions(true)} onMouseLeave ={()=> setShowActions(false)}>
          <img className="h-48 w-48" src={product.imageUrl} alt={product.name}/>
          <h1 className="text-xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-2">Price: ${product.price}</p>
          <p className="text-gray-700 mb-2">{product.description}</p>
          {/* <Link to='/singleproduct'>
            <button className="bg-red-600 mx-2 rounded-lg p-2 text-white">Preview</button>
          </Link> */}
          {showActions? <button className="hoverleft hover:bg-red-600 mx-2 rounded-lg p-2 hover:text-white" onClick={(e)=>{
               e.stopPropagation()
               e.preventDefault()
               history.push(`/singleproduct`)
           }}>
               View
           </button> 
       :null}
          {/* <Link to='/editproduct'> */}
             {/* <button className="bg-red-600 mx-2 rounded-lg p-2 text-white">Edit</button> */}
           {showActions?
           <button className="hoverleft hover:bg-red-600 mx-2 rounded-lg p-2 hover:text-white" onClick={(e)=>{
               e.stopPropagation()
               e.preventDefault()
               history.push(`/editproduct/${product.id}`)
           }}>
               Update
           </button>
           :null}
  
          {/* </Link> */}
          {/* <button className="bg-red-600 mx-2 rounded-lg p-2 text-white">Delete Product</button> */}
          {showActions? <button className="hoverleft hover:bg-red-600 mx-2 rounded-lg p-2 hover:text-white" onClick={(e)=>{
               e.stopPropagation()
               fetch(`http://localhost:9292/products/${product.id}`,{
                method:"DELETE"
            })
            .then ((res)=> res.json())
            .then(data=>{
            })
            handleDelete(product)
           }}>
               Delete
           </button> 
       :null}
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
