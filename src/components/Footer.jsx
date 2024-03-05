import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-evenly align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <NavLink to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"><use to="/bootstrap"></use></svg>
          </NavLink>
          <span className="text-light">© 2021 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex ">
          <li className="ms-3"><i class="fa-brands fa-whatsapp fa-xl" style={{ color: "#fff" }}></i></li>
          <li className="ms-3"><i class="fa-brands fa-instagram fa-xl" style={{ color: "#fff" }}></i></li>
          <li className="ms-3"><i class="fa-brands fa-twitter fa-xl" style={{ color: "#fff" }}></i></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
