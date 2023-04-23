import React, {useState, useEffect} from "react";
import Navlink from './Navlink';
import ProductCard from './ProductCard';

function Home() {
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
    <div className='home'>
      <div>
        <Navlink />
      </div>
      
      <div className="row">
          <div className="col-12 mt-5 mb-4">
              <h1 className="display-6-fw-bolder text-center">FLASH SALE</h1>
                <hr/>
          </div>
       </div>   
           
      
      <div>
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

      
    </div>
  )
}

export default Home


