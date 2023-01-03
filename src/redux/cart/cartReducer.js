import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
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
    case REMOVE_FROM_CART: {
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

export default cartReducer;
