import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgetResetPassword from "../Pages/ForgetResetPassword/ForgetResetPassword";
import LoginSignup from "../Pages/LoginSignup/LoginSignup";

function Routing(){
    return(
    <>
        <Router>
            <Routes>
                <Route path="/" element={<LoginSignup/>}/>
                <Route path="/forget" element={<ForgetResetPassword/>}/>
            </Routes>
        </Router>
    </>
    )
}

export default Routing;