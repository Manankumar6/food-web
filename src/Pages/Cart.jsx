import React from 'react'
import { useCart, useDispatch } from '../components/ContextReducer'

const Cart = () => {
    const data = useCart()
    const dispatch = useDispatch();
    if (data.length === 0) {
        return (
            <div className='container'>
                <div className="m-5  text-center fs-3">
                    The Cart is Empty <span className='fs-2 fw-bolder text-danger'>!</span>
                </div>
                <div className='d-flex justify-content-center'>

                    <img src="image/cart.png" alt="cartimage" style={{width:"250px", height:"300px"}}  />
                </div>
            </div>
        )
    }

    // Check Out
    const handleCheckOut = async () => {
        const userEmail = localStorage.getItem("email");

        // Check if userEmail is valid
        if (!userEmail) {
            console.error('Invalid or missing email in localStorage.');
            return;
        }

        try {
            const response = await fetch('https://food-api-u34z.onrender.com/api/orderdata', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    order_data: data,
                    email: userEmail,
                    order_date: new Date().toLocaleDateString()
                })
            });

            if (response.ok) {
                // Assuming dispatch is correctly defined and imported
                await dispatch({ type: 'DROP' });
            } else {
                // Handle non-ok response (e.g., log error or show an alert)
                console.error('Failed to submit order:', response.statusText);
            }
        } catch (error) {
            // Handle fetch error
            console.error('Error during fetch:', error.message);
        }
    };


    let totalPrice = data.reduce((total, food) => total + food.price, 0)
    
    return (
        <div className='container ' >
            <div className=" mx-auto mt-5 table-responsive table-responsive-sm table-responsive-md"></div>
            <table className="table text-white  ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Option</th>
                        <th scope="col">Amount</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody >
                    {data.map((food, index) => {
                        return (

                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{food.name}</td>
                                <td>{food.qty}</td>
                                <td>{food.size}</td>
                                <td>{food.price}</td>
                                <td onClick={() => { dispatch({ type: "REMOVE", index: index }) }} ><i className='bx bxs-trash-alt '></i></td>

                            </tr>
                        )
                    })}
                    </tbody>
                </table>

                    <div>
                        <h1 className='fs-2'>Total Price: {totalPrice}/-</h1>
                    </div>
                    <div>
                        <button className='btn bg-success mt-2 ' onClick={handleCheckOut}>Check Out</button>
                    </div>



        </div>
    )
}

export default Cart
