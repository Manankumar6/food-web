import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatch } from './ContextReducer'


const Card = (props) => {
    const data = useCart()
    const dispatch = useDispatch()
    const { name, _id, img } = props.foodItem


    const options = props.options;
    const priceOption = Object.keys(options)

    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("half")
    const priceRef = useRef()
    const finalPrice = qty * parseInt(options[size])



    // Add To Cart
    const handleCart = async () => {
      let food = []
      for(const item of data){
        if(item.id === _id){
            food = item;
            break;
        }
      }
    
     
        
        if (food) {
           
            if (food.size === size ) {
                await dispatch({ type: "UPDATE", id: _id, price: finalPrice, qty: qty, size:size });
              
                return;
            }else if(food.size !== size){
                await dispatch({ type: "ADD", id: _id, name: name, price: finalPrice, qty: qty, size: size });
          
                return; 
            }
            return;
        }
        
        await dispatch({ type: "ADD", id: _id, name: name, price: finalPrice, qty: qty, size: size });
       
     
        return;
    };
    
    



    useEffect(() => {

        setSize(priceRef.current.value)
    }, [])

    return (
        <div className='mx-3'>
            <div className="card mt-3 mb-3" style={{ "width": "18rem", "maxHeight": "350px" }}>
                <img src={img} className="card-img-top " alt="foodimage" />
                <div className="card-body">
                    <h5 className="card-title fs-3">{name}</h5>
                    <p className="card-text">Order Now</p>

                    <div className="container w-100 d-flex justify-content-between">

                        <select className='m-2 h-100 text-white bg-primary rounded' onChange={(e) => setQty(e.target.value)}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }

                        </select>

                        <select className='m-2 h-100   rounded text-white bg-primary' onChange={(e) => setSize(e.target.value)} ref={priceRef}>

                            {priceOption.map((data) => {
                                return (
                                    <option key={data} value={data}>{data}</option>
                                )
                            })}

                        </select>
                        <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
                    </div>
                </div>
                <hr />
                <button className={`btn btn-primary justify-center my-2 mx-2`} onClick={handleCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card
