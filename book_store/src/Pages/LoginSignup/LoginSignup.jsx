import React, { useState } from "react";
import './LoginSignup.css'
import LoginResetPageImage from '../../images/LoginResetPage.png'
import Login from "../../Component/Login/Login";
import Singup from "../../Component/Singup/Singup";

function LoginSignup() {
    const [toggle, setToggle] = useState({ButtonToggle:true, ButtonOneColor: "#0A0102", ButtonOneDisplay:"", ButtonTwoColor: "#878787", ButtonTwoDisplay:"none"});

    const LoginButtonClick = () => {
        setToggle(preState => ({...preState, ButtonToggle:true, ButtonOneColor: "#0A0102", ButtonOneDisplay:"", ButtonTwoColor: "#878787", ButtonTwoDisplay:"none"}))
    }
    const RegisterButtonClick = () => {
        setToggle(preState => ({...preState, ButtonToggle:false, ButtonOneColor: "#878787", ButtonOneDisplay:"none", ButtonTwoColor: "#0A0102", ButtonTwoDisplay:""}))
    }
    
    return (
        <div className="LoginSigupMainDiv">
            <div className="LoginSigupFirstDiv">
                <img src={LoginResetPageImage} height="70%" width="75%" alt="LoginSingup" style={{ borderRadius: '50%' }} />
                <h3>ONLINE BOOK SHOPPING</h3>
            </div>
            <div className="LoginSigupSecondDiv">
                <div className="LoginSigupButtonDiv">
                    <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
                        <div  size="large" onClick={LoginButtonClick} style={{ backgroundColor: '#fff', fontWeight: '600', fontSize: '28px', color: toggle.ButtonOneColor , cursor:'pointer'}}>
                            LOGIN
                        </div>
                        <div style={{ width: '2vw', height: '0.7vh', backgroundColor: '#A03037', borderRadius: '5px' , display: toggle.ButtonOneDisplay}}></div>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', alignContent:'center', alignItems:'center'}}>
                        <div  size="large" onClick={RegisterButtonClick} style={{ backgroundColor: '#fff', fontWeight: '600', fontSize: '28px', color: toggle.ButtonTwoColor, cursor:'pointer' }}>
                            SIGNUP
                        </div>
                        <div style={{ width: '2vw', height: '0.7vh', backgroundColor: '#A03037', borderRadius: '5px' , display: toggle.ButtonTwoDisplay}}></div>
                    </div>
                </div>
                {
                    toggle.ButtonToggle ? <Login /> : <Singup />
                }
            </div>
        </div>
    )
}

export default LoginSignup;