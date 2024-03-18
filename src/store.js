import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../src/features/login/loginSlice";
import userReducer from "../src/features/user/userSlice";

export default configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
  },
});
