import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Navbar from "./components/Navbar";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Notification from "./components/Notification";
function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                {/* <Notification /> */}
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/contact' exact component={Contact} />
                    <Route path='/signin' exact component={SignIn} />
                    <Route path='/signup' exact component={SignUp} />
                    <Redirect to='/' />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
