import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const CartContextDispatcher = createContext();

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);

const initialState = {
  cart: [],
  total: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const index = state.cart.findIndex((itm) => itm.id === action.payload.id);
      const product = { ...state.cart[index] };
      product.quantity++;
      const products = [...state.cart];
      products[index] = product;
      
      return index < 0
        ? {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          }
        : { ...state, cart: products };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;
