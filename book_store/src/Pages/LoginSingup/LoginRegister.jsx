import React, { useState } from "react";
import './LoginSingup.css'
import LoginResetPageImage from '../../images/LoginResetPage.png'
import Login from "../../Component/Login/Login";
import Singup from "../../Component/Singup/Singup";

import Button from '@mui/material/Button';

function LoginSingup() {
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
                <img src={LoginResetPageImage} height="60%" width="65%" alt="LoginSingup" style={{ borderRadius: '50%' }} />
                <h3>ONLINE BOOK SHOPPING</h3>
            </div>
            <div className="LoginRegisterSecondDiv">
                <div className="ButtonDiv">
                    <Button className="LoginButtonDiv"  size="large" onClick={LoginButtonClick}>
                        LOGIN
                    </Button>
                    <Button className="RegisterButtonDiv"  size="large" onClick={RegisterButtonClick}>
                        SINGUP
                    </Button>
                </div>
                {
                    toggle ? <Login /> : <Singup/>
                }
            </div>
        </div>
    )
}

export default LoginSingup;