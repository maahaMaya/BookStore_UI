import React, { useState } from "react";
import './LoginSingup.css'
import LoginResetPageImage from '../../images/LoginResetPage.png'
import Login from "../../Component/Login/Login";
import Singup from "../../Component/Singup/Singup";

import Button from '@mui/material/Button';

function LoginSingup() {
    const [toggle, setToggle] = useState({ButtonToggle:true, ButtonOneColor: "black", ButtonOneDisplay:"", ButtonTwoColor: "pink", ButtonTwoDisplay:"none"});

    const LoginButtonClick = () => {
        setToggle(preState => ({...preState, ButtonToggle:true, ButtonOneColor: "black", ButtonOneDisplay:"", ButtonTwoColor: "pink", ButtonTwoDisplay:"none"}))
    }
    const RegisterButtonClick = () => {
        setToggle(preState => ({...preState, ButtonToggle:false, ButtonOneColor: "pink", ButtonOneDisplay:"none", ButtonTwoColor: "black", ButtonTwoDisplay:""}))
    }
    return (
        <div className="LoginRegisterMainDiv">
            <div className="LoginRegisterFirstDiv">
                <img src={LoginResetPageImage} height="60%" width="65%" alt="LoginSingup" style={{ borderRadius: '50%' }} />
                <h3>ONLINE BOOK SHOPPING</h3>
            </div>
            <div className="LoginRegisterSecondDiv">
                <div className="ButtonDiv">
                    <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
                        <div className="LoginButtonDiv" size="large" onClick={LoginButtonClick} style={{ backgroundColor: '#fff', fontWeight: 'bold', fontSize: '28px', color: toggle.ButtonOneColor , cursor:'pointer'}}>
                            LOGIN
                        </div>
                        <div style={{ width: '2vw', height: '0.7vh', backgroundColor: 'red', borderRadius: '5px' , display: toggle.ButtonOneDisplay}}></div>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
                        <div className="RegisterButtonDiv" size="large" onClick={RegisterButtonClick} style={{ backgroundColor: '#fff', fontWeight: 'bold', fontSize: '28px', color: toggle.ButtonTwoColor, cursor:'pointer' }}>
                            SINGUP
                        </div>
                        <div style={{ width: '2vw', height: '0.7vh', backgroundColor: 'red', borderRadius: '5px' , display: toggle.ButtonTwoDisplay}}></div>
                    </div>

                </div>
                {
                    toggle.ButtonToggle ? <Login /> : <Singup />
                }
            </div>
        </div>
    )
}

export default LoginSingup;