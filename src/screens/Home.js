import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { increment } from "../features/HomeSlice";
import { login, logout } from "../features/UserSlice";
const Home = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <div>
            <button
                aria-label='Increment value'
                onClick={() =>
                    dispatch(login({ name: "ABHINAV", usn: "1NH17IS002" }))
                }>
                NAME
            </button>
            <button
                aria-label='Increment value'
                onClick={() => dispatch(logout())}>
                NAME
            </button>
            <h1>This is Home page {user.name}</h1>
        </div>
    );
};

export default Home;
