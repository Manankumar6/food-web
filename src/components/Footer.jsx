import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-evenly align-items-center py-3 my-4 border-top position-related bottom-0">
        <div className="col-md-4 d-flex align-items-center">
        
          <span className="text-light">Made With ♥ By Manan</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex ">
          <li className="ms-3"><Link to='https://wa.me/qr/CE2NQOCPJFHBM1' target='_blank'><i className="fa-brands fa-whatsapp fa-xl" style={{ color: "#fff" }}></i></Link></li>
          <li className="ms-3"><Link to='https://www.instagram.com/manankumar_06/?r=nametag' target='_blank'><i className="fa-brands fa-instagram fa-xl" style={{ color: "#fff" }}></i></Link></li>
          <li className="ms-3"><i className="fa-brands fa-twitter fa-xl" style={{ color: "#fff" }}></i></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
