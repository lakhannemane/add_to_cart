import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Navbar = () => {
    const
        { cartItem, cartTotalAmount, cartTotalItem } = useSelector(state => state.cart)
    console.log(cartItem)

    let total = 0;
    let cartitem = 0;

    for (let i = 0; i < cartItem.length; i++) {
        cartitem += cartItem[i].cartQuantity;
        // total = total + cartItem[i].price * cartItem[i].cartQuantity;
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container ">
                <a className="navbar-brand ms-5 fw-bold" href="#">ShopStore</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-decoration-none">
                        <Link to="/" >
                            <li className="nav-item">
                                <a className="nav-link active text-decoration-none" aria-current="page" href="#">Home</a>
                            </li>
                        </Link>

                        <Link to="/cart" >
                            <li className="nav-item">
                                <a className="nav-link text-decoration-none" href="#">Cart</a>
                            </li>
                        </Link>

                    </ul>
                    <Link to="/cart">
                    <p className='me-5 '>Cart :<span className='fw-bold ms-2'>({cartitem}) Item</span></p>
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar