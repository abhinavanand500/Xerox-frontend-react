import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/HomeSlice";
import { login, logout } from "../features/UserSlice";
const Home = () => {
    const user = useSelector((state) => state.user);
    const home = useSelector((state) => state.home);
    console.log(home.value);
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
            <button
                aria-label='Increment value'
                onClick={() => dispatch(increment())}>
                NAME
            </button>
            <h1>
                This is Home page {user.userDetails.name} - {home.value}
            </h1>
        </div>
    );
};

export default Home;
