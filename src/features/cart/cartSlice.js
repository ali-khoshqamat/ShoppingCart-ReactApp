import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
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
    },
    removeFromCart: (state, action) => {
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
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
