import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Myorder = () => {
  const [orderData, setOrderData] = useState([]);
  let preOrderDate = null;
  const fetchData = async () => {

    try {
      const response = await fetch('https://food-api-u34z.onrender.com/api/myorderdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: localStorage.getItem('email'),


        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data, "consoledata");
        setOrderData(data.foodData); // Assuming your array is under the 'orderData' key

      }
    } catch (error) {
      console.error(error);
    }
  }
  const capitalize = (word) => {

    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container my-3 mx-auto">
      <div className="row ">
      {orderData.order_data ? orderData.order_data.map((curr, ind) => {
        let orderDate;
        return (
          <>
            {curr.map((item, ind) => {

              if (item.Order_date) {
                orderDate = item.Order_date;
              }
              return (
                <>
                  {item.Order_date ?
                    <div>
                      <h3 className="m-auto mt-1 text-light">
                        {item.Order_date}
                      </h3>
                      <hr />
                    </div>
                    : ""}




                  {item.name ?
                   

                          <div className="card mt-3 col-12 col-md-6 col-lg-3 mx-3 " style={{ "width": "18rem", "maxHeight": "350px" }}>

                            <div className="card-body bg-light text-dark rounded-3 ">
                              <h5 className="card-title fs-3 fw-bold">{item.name}</h5>
                              <div className="container w-100 d-flex justify-content-between">

                                <span className='m-1'>{item.qty}</span>
                                <span className='m-1'>{capitalize(item.size)}</span>
                                <span className='m-1'>{orderDate}</span>


                              </div>
                              <hr className='text-dark' />
                              <div className='d-flex justify-content-between '>

                                <h5 className='fw-bold'>Total Price</h5>
                                <div className="ms-2  h-100 fs-5 fw-bold text-danger">₹{item.price}/-</div>
                              </div>
                            </div>

                          </div>
                      
                    : ""}




                </>
              )
            })}
          </>
        )
      })

        : <div className='container d-flex flex-column justify-content-center align-items-center mt-5  text-light'>
          <h1>Cart is empty</h1>
          <NavLink to="/"> <button className='btn btn-warning fs-2 fw-bold w-100 my-2 '>Shop Now</button></NavLink>
        </div>}
        </div>
    </div>
  )

}
export default Myorder
