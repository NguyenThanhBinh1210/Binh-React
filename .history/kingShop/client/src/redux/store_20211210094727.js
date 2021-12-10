import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
