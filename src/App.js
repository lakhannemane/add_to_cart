import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from './Store/CartSlice'
import { fetchSubcategory, STATUS } from './Store/SubcategorySlice'

const App = () => {
  const { data: products, status } = useSelector(state => state.subcategory)
  console.log(products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubcategory())
  }, [])


  const addToCart = (product) => {
    dispatch(add(product))
  }

  // if(status===STATUS.LOADING){
  //   return <h2>Loading.....</h2>
  // }
  return (
    <div class="container px-4">
      <h2 className="text-center py-3">Welcome To MyWebsite</h2>
      <div class="row gx-5 py-2">
        {products.map((product) => {
          return (
            <div class="col-lg-4 col-md-6 col-sm-12 py-2 text-center" key={product.id}>
              <div class="p-3 border bg-light card">
                <div className='card-body' >
                  <img src={product.image} alt="product_image" style={{ width: "90px", height: "90px" }}></img>
                  <p>{product.title}</p>
                  <p>Price : ${product.price}</p>
                  <button type="button" class="btn btn-success" onClick={() => addToCart(product)}>ADD TO CART</button>
                  <button type="button" class="btn ms-2 btn-outline-warning text-dark" >Buy Now</button>

                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default App