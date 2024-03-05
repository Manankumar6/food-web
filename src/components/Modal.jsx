import React from 'react'
import ReactDom from 'react-dom'
const Modal = ({ children, onClose }) => {
  const MODAL_STYLE = {
    position: "fixed",
    top: "50%",
    left: "50%",
    backgroundColor: " rgb(34, 34, 34)",
    transform: "translate(-50%,-50%)",
    zIndex: 100,
    height: " 90%",
    width: "90%",
    color:"white"
  }
  const OVERLAY_STYLE = {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 100,
    color:"white"

  }
  return ReactDom.createPortal(

    <>
      <div style={OVERLAY_STYLE}>
        <div style={MODAL_STYLE}>
          <button className='btn bg-danger fs-4' style={{ marginLeft: "90%", marginTop: "-35px" }} onClick={onClose}>X</button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("cart-root")
  )
}

export default Modal
