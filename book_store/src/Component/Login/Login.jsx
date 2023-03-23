import React, { useState } from "react";
import './Login.css'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { CustomerSignInApi } from "../../Services/CustomerSevice";
import { useNavigate } from 'react-router-dom';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Login() {
    const [customerLoginDetails, setCustomerLoginDetails] = useState({ email_id: '', passwords: '' });
    const [regexCustomerLoginDetails, setRegexCustomerLoginDetails] = useState({ email_idError: false, email_idHelperText: ' ', passwordsError: false, passwordsHelperText: ' ' });

    const EmailIdLoginTextField = (event) => {
        setCustomerLoginDetails(preState => ({ ...preState, email_id: event.target.value }))
    }
    const PasswordLoginTextField = (event) => {
        setCustomerLoginDetails(preState => ({ ...preState, passwords: event.target.value }))
    }

    let navigate = useNavigate();

    const LoginButton = () => {
        let email_idRegexCheck = emailRegex.test(customerLoginDetails.email_id);
        let passwordsRegexCheck = passwordRegex.test(customerLoginDetails.passwords);

        if (email_idRegexCheck === true) {
            setRegexCustomerLoginDetails(preState => ({ ...preState, email_idError: false, email_idHelperText: ' ' }))
        }
        else {
            setRegexCustomerLoginDetails(preState => ({ ...preState, email_idError: true, email_idHelperText: 'Enter Valid Email' }))
        }

        if (passwordsRegexCheck === true) {
            setRegexCustomerLoginDetails(preState => ({ ...preState, passwordsError: false, passwordsHelperText: ' ' }))
        }
        else {
            setRegexCustomerLoginDetails(preState => ({ ...preState, passwordsError: true, passwordsHelperText: 'Enter Valid Password' }))
        }

        //login api call
        if (email_idRegexCheck && passwordsRegexCheck) {
            let customerLoginData = {
                "email_id": customerLoginDetails.email_id,
                "passwords": customerLoginDetails.passwords
            }
            CustomerSignInApi(customerLoginData)
                .then(res => {
                    console.log(res)
                    localStorage.setItem("token", res.data.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    return (
        <>
            <div className="LoginMainDiv">
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Email Id</div>
                    <TextField
                        id="outlined-basic1"
                        error={regexCustomerLoginDetails.email_idError}
                        helperText={regexCustomerLoginDetails.email_idHelperText}
                        className='InputGmail'
                        variant="outlined"
                        size='medium'
                        onChange={EmailIdLoginTextField}
                        style={{ width: '21vw' }}
                    />
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Password</div>
                    <TextField
                        id="outlined-basic2"
                        error={regexCustomerLoginDetails.passwordsError}
                        helperText={regexCustomerLoginDetails.passwordsHelperText}
                        className='InputPassword'
                        variant="outlined"
                        size='medium'
                        type="password"
                        onChange={PasswordLoginTextField}
                        style={{ width: '21vw' }}
                    />
                    <Button
                        sx={{ display: 'flex', justifyContent: 'end', border:'none',backgroundColor:'#fff', background:'transparent', fontSize: '12px', color: '#9D9D9D', marginTop: '-30px', marginLeft:'195px' }}
                        onClick={() => navigate("/forget")}
                    >Forget Password?
                    </Button>
                </div>
                <Button
                    className="LoginFormButton"
                    size="large"
                    variant="contained"
                    style={{ backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '15px' }}
                    onClick={LoginButton}>
                    Login
                </Button>
                <div className="OrTextDiv">
                    <div style={{ width: '5vw', height: '2px', backgroundColor: 'red', marginTop: '22px' }}></div>
                    <h4 style={{ marginTop: '8px' }}>OR</h4>
                    <div style={{ width: '5vw', height: '2px', backgroundColor: 'red', marginTop: '22px' }}></div>
                </div>
                <div className="FaceBookGoogleFormButton">
                    <Button size="large" variant="contained" style={{ textTransform: 'none', fontSize: '17px', marginRight: '0.5vw', width: '10.5vw', backgroundColor: '#4266B2' }}>
                        FaceBook
                    </Button>
                    <Button size="large" variant="outlined" style={{ textTransform: 'none', fontSize: '17px', width: '10.5vw', backgroundColor: '#F5F5F5', borderColor: '#E4E4E4', color: '#0A0102' }} onClick={() => navigate("/forget")}>
                        Google
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Login;