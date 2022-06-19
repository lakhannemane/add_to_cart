import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, decreaseQuantity, remove } from '../Store/CartSlice'

const CartPage = () => {
    const
        { cartItem, cartTotalAmount, cartTotalItem } = useSelector(state => state.cart)
    console.log(cartItem)

    console.log(cartItem[0].cartQuantity)
    console.log("indexing 0 cartItem quantity")

    const dispatch = useDispatch();

    let total = 0;
    let cartitem = 0;

    for (let i = 0; i < cartItem.length; i++) {
        cartitem += cartItem[i].cartQuantity;
        total = total + cartItem[i].price * cartItem[i].cartQuantity;
    }
    console.log(total)
    console.log(cartitem)

    const HandleRemove = (product) => {
        dispatch(remove(product))
        window.alert(product)
        // alert("removed from cart")
    }

    const decrese = (product) => {
        dispatch(decreaseQuantity(product));
    }
    const increase = (product) => {
        dispatch(addQuantity(product));
    }

    console.log("dgajgdag hjgasdgasgd jsvdjgas")
    console.log(cartItem)


    return (
        <>
    
        <div className='container '>
            <div className='ms-5'>
                
                {cartItem ? (
                    <>
                        <div className='d-flex py-3'>

                            <p className='h3 pt-2'>Your Cart</p>
                            <p className='pt-2 ms-auto me-5 '>Total: <span className='fw-bold'>$ {total}</span>  </p>
                        </div>

                        {cartItem.map((product, index) => {
                            return (
                                <div key={index}>
                                    <div className="card mt-5 py-3 px-5" >
                                        <div className="row">
                                            <div className="col-lg-2 col-md-3 col-sm-12 text-center pt-2">
                                                <img src={product.image} alt="" width={100} />
                                            </div>

                                            <div className="col-lg-8 col-md-6 col-sm-12 pt-2">
                                                <p>{product.title}</p>
                                                <p >Price: $<span className='ms-2 fw-bold'>{product.price}</span> </p>
                                                <div className='' style={{ width: "100px" }}>
                                                    <span className='border px-2 py-1 fw-bold  ' style={{ cursor: "pointer" }} onClick={() => increase(product)}>+</span>
                                                    <span className='border px-2 py-1'>{cartItem[index].cartQuantity}</span>
                                                    <span className='border px-2 py-1 fw-bold' style={{ cursor: "pointer" }} onClick={() => decrese(product)}>-</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-sm-12 pt-3">
                                                <button className='btn btn-outline-danger' onClick={() => HandleRemove(product)}>Remove </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })}
                    </>
                ) : 
                (
                    <h2>there is no Record</h2>
                )}
            </div>
        </div>
        </>
    )
}

export default CartPage