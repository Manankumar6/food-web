import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import Modal from './Modal';
import Cart from '../Pages/Cart';
import { useCart } from './ContextReducer';

const Navbar = () => {
    const [cartView, setCartView] = useState(false);
    const data = useCart()
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("authToken")
        navigate('/login')
    }
   
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-gradient" style={{background:"#395b8d"}}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand fs-1  fst-italic" to="/" ><span className='text-warning fw-bold'>24/7</span> Foody</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav mx-auto mb-2 mx-4 ">
                            <NavLink className="nav-link active fs-4" aria-current="page" to="/"><i className="fa-solid fa-house"></i></NavLink>
                            {
                                (localStorage.getItem("authToken")) ?
                                    <NavLink className="nav-link active fs-4" aria-current="page" to="/myorder"><i class="fa-solid fa-bag-shopping mx-1"></i>  My Order</NavLink>

                                    : ""}
                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <div className='d-flex' >

                                <NavLink className="btn bg-white text-success mx-1" to="/login">Login</NavLink>
                                <NavLink className="btn bg-white text-success mx-1" to="/signup">Signup</NavLink>

                            </div>
                            :
                            <div >


                                <NavLink className="btn bg-white text-success mx-1" to="/" onClick={()=>setCartView(true)} >
                                <i className="fa-solid fa-cart-shopping"></i> <span className="badge bg-danger rounded-circle">{data.length}</span>
                                </NavLink>

                              {cartView?<Modal onClose={()=>{setCartView(false)}} ><Cart/></Modal>:null}
                                <button className="btn bg-white text-danger mx-1" onClick={handleLogout} ><i className="fa-solid fa-right-from-bracket"></i></button>
                            </div>
                        }
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
