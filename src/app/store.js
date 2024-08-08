import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../fatures/user/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
