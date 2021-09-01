import { configureStore } from "@reduxjs/toolkit";
import HomeSlice from "../features/HomeSlice";
import UserSlice from "../features/UserSlice";
export default configureStore({
    reducer: {
        user: UserSlice,
        home: HomeSlice,
    },
});
