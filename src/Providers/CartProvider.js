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
    case "ADD_TO_CART": {
      const index = state.cart.findIndex((p) => p.id === action.payload.id);
      const product = { ...state.cart[index] };
      const products = [...state.cart];
      product.quantity++;
      products[index] = product;

      return index < 0
        ? {
            total: state.total + 1,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          }
        : { total: state.total + 1, cart: products };
    }
    case "REMOVE_FROM_CART": {
      const index = state.cart.findIndex((p) => p.id === action.payload.id);
      const product = { ...state.cart[index] };
      const products = [...state.cart];
      product.quantity--;
      products[index] = product;

      return product.quantity < 1
        ? {
            total: state.total - 1,
            cart: state.cart.filter((p) => p.id !== action.payload.id),
          }
        : { total: state.total - 1, cart: products };
    }
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
