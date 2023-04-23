import React, { useState, useEffect } from 'react';
import {useHistory } from 'react-router-dom';
import EditProduct from './EditProduct';


function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory()
  const [showActions,setShowActions] = useState(false)
  const [editProductId, setEditProductId] = useState(false);

  useEffect(() => {
        fetch(`/products?page=${currentPage}&perPage=5&sort=-createdAt`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data =>{
          setProducts(data);
          setTotalPages(data.totalPages);
          setLoading(false);
          setCurrentPage(1); // Reset currentPage to 1 after fetching sorted products
        
        }
        )
        .catch (error => console.log(error));
        },[currentPage]);

  function handlePrevPage() {
    setCurrentPage(prevPage => prevPage - 1);
  }

  function handleNextPage() {
    setCurrentPage(prevPage => prevPage + 1);
  }
 

  const handleUpdateProduct = (productId, title, description, imageUrl, price) => {
    const productToUpdate = { title, description, imageUrl, price };
    fetch(`/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productToUpdate),
    })
      .then(response => response.json())
      .then(updatedProduct => {
        setProducts(products.map(product => (product.id === updatedProduct.id ? updatedProduct : product)));
        setEditProductId(null);
      })
      .catch(error => console.error(error));
  };

  const handleEditProduct = (productId) => {
    setEditProductId(productId);
  };

  function handleDelete(product) {
    if (window.confirm("Are you sure you want to delete this product?")) {
      // Delete the product from the server
      fetch(`/products/${product.id}`, {
        method: "DELETE",
      })
        // .then((res) => res.json())
        // .then((data) => {
        //   // Filter out the deleted product from the products array
        //   const updatedProducts = products.filter((p) => p.id !== product.id);
  
        //   // Update the state of the parent component with the updated products array
        //   setProducts(updatedProducts);
        // })
        // .catch((error) => console.log(error));
        document.location.reload();
    }
  }
  

//   const handleDeleteProduct = (productId) => {
//     if (window.confirm("Are you sure you want to delete this product?")) {
//       fetch(`/products/${productId}`, {
//         method: 'DELETE'
//       })
//         // .then(response => response.json())
//         // .then(() => {
//         //   // setProducts(prevproducts => prevproducts.filter(product => product.id !== productId));
//         // })
//         // .catch(error => console.error(error)); 
//          document.location.reload();

//     }
// }
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
    <div className="p-2 overflow-x-scroll h-screen">
      <div>
      {products.map(product => (
        <div key={product.id} className="bg-zinc-200 hover:bg-zinc-300 hover:font-semibold  rounded-lg shadow-md p-2 mb-4" onMouseEnter ={()=> setShowActions(true)} onMouseLeave ={()=> setShowActions(true)}>
          <img className="h-48 w-48" src={product.imageUrl} alt={product.name}/>
          <h1 className="text-xl font-bold mb-2">{product.title}</h1>
          <p className="font-semibold mb-2">Price: <span className='text-red-600'>${product.price}</span></p>
          <p className="text-gray-700 font-light mb-2">{product.description}</p>
          {
            showActions?
              <div className=''>
              <button className="hoverleft hover:bg-red-600 mx-2 rounded-lg p-2 hover:text-white" onClick={(e)=>{
                  e.stopPropagation()
                  history.push(`/singleproduct`)
              }}>
                  View
              </button> 
              <button className="hoverleft hover:bg-red-600 mx-2 rounded-lg p-2 hover:text-white" onClick={(e)=>
                handleDelete(product.id)
              }>
                Delete
              </button>  
              <button className="hoverleft hover:bg-green-600 mx-2 rounded-lg p-2 hover:text-white" onClick={()=>handleEditProduct(product.id)}>
                Update
              </button>

              {editProductId &&
                <EditProduct
                  productId={editProductId}
                  onUpdate={handleUpdateProduct}
                  onCancel={() => setEditProductId(null)}
                />
              }
            </div>
            :null
          }
          </div>

          ))
          }

      </div>
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
