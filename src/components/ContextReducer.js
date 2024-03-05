import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();
const DispatchCart = createContext();

// ... (import statements remain the same)

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          img: action.img,
          price: action.price,
        },
      ];
    case "REMOVE":
      return state.filter((_, index) => index !== action.index);
    case "UPDATE":
      let arr = [...state]
      arr.find((food , index )=>{
        if(food.id === action.id && food.size === action.size ){
          arr[index] = {
            ...food,
            qty:parseInt(action.qty) + food.qty,
            price:action.price + food.price
          }
        }
        return arr;
      })
      return arr;

      case "DROP":
        let emptyArray = []
        return emptyArray
    default:
      console.log("Error in Reducer");
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <DispatchCart.Provider value={dispatch}>
      <CartContext.Provider value={state}>
        {children}
      </CartContext.Provider>
    </DispatchCart.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
export const useDispatch = () => useContext(DispatchCart);
