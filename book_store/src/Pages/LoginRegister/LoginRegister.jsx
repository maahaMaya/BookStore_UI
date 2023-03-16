import React from "react";
import './LoginRegister.css'
import LoginResetPageImage from '../../images/LoginResetPage.png'
import Login from "../../Component/Login/Login";
import Register from "../../Component/Register/Register";

function LoginRegister() {
    return (
        <div className="LoginRegisterMainDiv">
                <div className="LoginRegisterFirstDiv">
                    <img src={LoginResetPageImage} height="300px" width="300px" style={{borderRadius:'50%'}}/>
                    <h3>ONLINE BOOK SHOPPING</h3>
                </div>
                <div className="LoginRegisterSecondDiv">
                    <div>
                        <button>Login</button>
                        <button>Login</button>
                    </div>
                    {/* <Login/> */}
                    <Register/>
                </div>
        </div>
    )
}

export default LoginRegister;