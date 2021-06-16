import { createSlice } from "@reduxjs/toolkit";

export const HomeSlice = createSlice({
    name: "counter",
    initialState: {
        name: "",
        usn: "",
    },
    reducers: {
        increment: (state, actions) => {
            console.log(actions.payload);
            const { name, usn } = actions.payload;
            state.name = name;
            state.usn = usn;
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            // state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = HomeSlice.actions;

export default HomeSlice.reducer;