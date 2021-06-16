import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
    },
    reducers: {
        login: (state, actions) => {
            state.user = actions.payload;
        },
        logout: (state) => {
            state.user = {};
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { login, logout } = UserSlice.actions;

export default UserSlice.reducer;
