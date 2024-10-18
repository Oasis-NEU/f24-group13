import React from "react";
// import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
// import Signin from "./pages/Sign-in";
 
function App() {
    return (
        <div className="App">
            <h1>test</h1>
            <Profile/>
        </div>
    );
}
 
export default App;