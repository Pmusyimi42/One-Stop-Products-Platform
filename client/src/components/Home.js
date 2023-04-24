import React, {useState, useEffect} from "react";
import Navlink from './Navlink';
import ProductCard from './ProductCard';
import CategoriesFilter from "./CategoriesFilter";


function Home() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [list, setList] = useState([])


  useEffect(() => {
      fetch("/product_categories")
      .then((response)=> response.json())
      .then((data)=> {
        //  console.log(data[0].category.name)
        //  console.log(data[0].product.imageUrl)

        setItems(data)
      })

      window.scrollTo(0, 0)

  }, [])

const searchItems = items.filter(item=>{
  return item.product.title.toLowerCase().includes(search.toLowerCase())
})
function filterData(data){
 const test= searchItems.filter(item=>{

    return item.category.name.toLowerCase()=== data
  
   })
      setList(test)
}
console.log(list)

  return (
    <div className='home'>
      <div>
        <Navlink setSearch={setSearch} search={search}/>
      </div>
      
      <div className="row">
          <div className="col-12 mt-5 mb-4">
              <h1 className="display-6-fw-bolder text-center">FLASH SALE</h1>
                <hr/>
          </div>
       </div>
       <section>
       <div>
          <CategoriesFilter items={items} searchItems={searchItems} filterData={filterData} />
      </div>
      </section> 
     
      <div>
      <div className="row" id="content">

            {
        list.length > 0 ? (
          list.map((item, index) => {
            return <ProductCard key={index} item={item} />
          })
        ) : (
          searchItems.map((item, index) => {
            return <ProductCard key={index} item={item} />
          })
        )
      }
               
       </div>
       </div>

      
    </div>
  )
}

export default Home


