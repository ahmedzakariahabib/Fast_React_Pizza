import { configureStore } from "@reduxjs/toolkit";
//import for reducer
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    //user and cart key for reducer
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
