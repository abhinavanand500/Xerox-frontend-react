import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        userDetails: {},
        isLoggedIn: false,
    },
    reducers: {
        login: (state, actions) => {
            state.userDetails = actions.payload;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.userDetails = {};
            state.isLoggedIn = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { login, logout } = UserSlice.actions;

export default UserSlice.reducer;
