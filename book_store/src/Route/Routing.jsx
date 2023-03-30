import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from "../Component/Cart/Cart";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ForgetResetPassword from "../Pages/ForgetResetPassword/ForgetResetPassword";

import LoginSignup from "../Pages/LoginSignup/LoginSignup";

function Routing(){
    return(
    <>
        <Router>
            <Routes>
            <Route path="/" element={<Dashboard/>}/>
                <Route path="/loginSignup" element={<LoginSignup/>}/>
                <Route path="/forget" element={<ForgetResetPassword/>}/>
                <Route path="/customerCart" element={<Cart/>}/>
            </Routes>
        </Router>
    </>
    )
}

export default Routing;