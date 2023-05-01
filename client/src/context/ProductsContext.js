import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export const ProductsContext = createContext();

export default function ProductsProvider({children}) 
{
    const navigate = useNavigate()
    const [products, setProducts] = useState()
    const [change, setOnChange] = useState(false)

    // Adding Product
    const AddProduct = (title, description, price, imageUrl) =>{
        fetch("/products",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title, description, price,imageUrl
            })
        }
        )
        .then(res=>res.json())
        .then(response=>{
            console.log("add product ",response)
            if(response)
            {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Product added successfully',
                    showConfirmButton: false,
                    timer: 2000
                  })
                  navigate('/products_list')
                  setOnChange(!change)
                 

            }
            
        })
    }


    // Fetch products
    useEffect(()=>{
        fetch("/products",{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        }
        )
        .then(res=>res.json())
        .then(response=>{
            setProducts(response)
            console.log(response)
        }
        )
    }, [change])
   

    const contextData = {
      products,
      AddProduct,
    //   
    }

  return (
    <>
     <ProductsContext.Provider value={contextData}>
        {children}
     </ProductsContext.Provider>
    </>
  )
}