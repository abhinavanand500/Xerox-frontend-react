import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Navbar from "./components/Navbar";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Footer from "./components/Footer";
function App() {
    const user = useSelector((state) => state.user);
    const { isLoggedIn } = user;
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                {/* <Notification /> */}
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/contact' exact component={Contact} />
                    {isLoggedIn === true ? (
                        <Redirect to='/' />
                    ) : (
                        <Route path='/signin' exact component={SignIn} />
                    )}
                    {isLoggedIn ? (
                        <Redirect to='/' />
                    ) : (
                        <Route path='/signup' exact component={SignUp} />
                    )}
                    <Redirect to='/' />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
