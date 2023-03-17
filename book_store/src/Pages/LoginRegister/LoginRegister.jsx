import React, { useState } from "react";
import './LoginRegister.css'
import LoginResetPageImage from '../../images/LoginResetPage.png'
import Login from "../../Component/Login/Login";
import Register from "../../Component/Register/Register";

function LoginRegister() {
    const [toggle, setToggle] = useState(true);

    const LoginButtonClick = () => {
        setToggle(true)
    }
    const RegisterButtonClick = () => {
        setToggle(false)
    }
    return (
        <div className="LoginRegisterMainDiv">
                <div className="LoginRegisterFirstDiv">
                    <img src={LoginResetPageImage} height="300px" width="300px" style={{borderRadius:'50%'}}/>
                    <h3>ONLINE BOOK SHOPPING</h3>
                </div>
                <div className="LoginRegisterSecondDiv">
                    <div>
                        <button onClick={LoginButtonClick}>Login</button>
                        <button onClick={RegisterButtonClick}>Register</button>
                    </div>
                    {
                        toggle ? <Login/> :<Register/>
                    }
                </div>
        </div>
    )
}

export default LoginRegister;