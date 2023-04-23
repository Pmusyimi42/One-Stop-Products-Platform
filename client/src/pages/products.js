import ProductCard from "../components/ProductCard";
import React, {useState, useEffect} from "react";


export default function Products() {


  const [items, setItems] = useState([])
  useEffect(() => {
      fetch("/products")
      .then((response)=> response.json())
      .then((data)=> {
          setItems(data)
      })

      window.scrollTo(0, 0)

  }, [])

  return (
    <div className="products">
      <div className="row" id="content">
                {
                   items && items.map((item, index)=> {
                        return(
                          
                            // cannot use link tag twice with 2 onClicks since you will be directed to only command page. Therefore use the useHistory.
                           <ProductCard key={index} item={item} />
                        )
                    })
                }
                
       </div>
    </div>
  );
}