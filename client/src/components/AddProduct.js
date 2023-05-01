import React, { useState,useContext } from 'react';
// import { CgProfile } from 'react-icons/cg';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import Preview from './Preview';
import { AuthContext } from '../context/AuthContext';
import ProductList from './ProductList';
import { ProductsContext } from '../context/ProductsContext';


function AddProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState();
  const [change, setOnChange] = useState(false);

  const {AddProduct} = useContext(ProductsContext);


  const handleSubmit = (e)=>{
    e.preventDefault()
      // send Data to rails
     AddProduct(title, description,imageUrl, price)
     setTitle("")
     setDescription("")
     setImageUrl("")
     setPrice()
  };

  return (
    <div className='bg-zinc-300 mx-auto min-h-[80vh] flex flex-col'>
      <h1 className='mx-auto mt-2 text-3xl font-bold'>Add New Product</h1>
      <div className='grid grid-cols-2 mt-2 mx-auto  gap-2'>
        <div className='flex flex-col bg-zinc-300 shadow-xl min-h-[80vh]'>
          <div className='text-center'>
            <form onSubmit={handleSubmit}>
              <h1 className='text-bold mx-auto text-lg font-semibold'>Name</h1>
              <input
                type='text'
                className='mx-auto mt-3 text-lg rounded-lg shadow-xl bg-zinc-200'
                placeholder='Type the name of the product'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <h1 className='text-bold mx-auto mt-4 text-lg font-semibold'>Description</h1>
              <textarea
                type='text'
                className='mx-auto mt-3 text-lg rounded-lg shadow-xl bg-zinc-200'
                placeholder='Description of the product'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <h1 className='text-bold mx-auto mt-4 text-lg font-semibold'>Image</h1>
              <input
                type='text'
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
                className='mx-auto mt-3 text-sm text-black bg-zinc-200 shadow-xl'
                placeholder='Image Url'
              />
              <h1 className='text-bold mx-auto mt-4 text-lg font-semibold'>Price</h1>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className='mx-auto mt-3 bg-zinc-200 rounded-lg py-2 shadow-xl'
                placeholder=' $'
                type='number'
                min='0'
                step='1'
              />
              <button className={`flex mx-auto mt-8 py-3 bg-red-600 rounded-full p-2 text-white  ${!title || !description || !imageUrl || !price ? 'opacity-50 cursor-not-allowed' : 'hoverleft hover:bg-red-600 mx-2  hover:text-white hover:font-bold hover:text-xl text-white hover:rounded-full'}`}
              onClick={() => setOnChange(change)}
              disabled={!title || !description || !imageUrl || !price}
              >
                  Add product to store
              </button>

            </form>
          </div>
        </div>
        <ProductList />
      </div>
    </div>
  );
}

export default AddProduct;
