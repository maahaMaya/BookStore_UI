import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import './ForgetResetPassword.css'
import HeaderPagebookImage from '../../images/bookLogo.png'
import { CustomerForgetPasswordApi, CustomerResetPasswordApi } from '../../Services/CustomerSevice';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const jwtRegex = /^[\w-]+\.[\w-]+\.[\w-]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function ForgetResetPassword() {
    const [emailDetails, setEmailDetails] = useState({ emailDetailsValue: '', emailDetailsError: false, emailDetailsHelperText: ' ', emailDetailsDisabled: false })
    const [displayOTP, setDisplayOTP] = useState({ displayOTPValue: '', display: 'none' })
    const [buttonLogin, setButtonLogin] = useState('Reset Password');
    const [functionForgetResetPasswordCallValue, setFForgetResetPasswordCallValue] = useState('ForgetPasswordFuntion')
    const [textFieldValue, setTextFieldValue] = useState({ textField1: 'Email Id', textField2: 'OTP' })

    const ForgotEmailTextField = (e) => {
        setEmailDetails(preState => ({ ...preState, emailDetailsValue: e.target.value }))
    }

    const OtpValidater = (e) => {
        setDisplayOTP(preState => ({ ...preState, displayOTPValue: e.target.value }))
    }

    const ForgetPasswordFuntion = () => {
        let emailDetailsRegex = emailRegex.test(emailDetails.emailDetailsValue)
        if (emailDetailsRegex) {
            setEmailDetails(preState => ({ ...preState, emailDetailsError: false, emailDetailsHelperText: ' ' }))
        } else {
            setEmailDetails(preState => ({ ...preState, emailDetailsError: true, emailDetailsHelperText: 'Enter Write Format Email' }))
        }

        let customerForgetPassword = {
            "email_id": emailDetails.emailDetailsValue
        }

        if (emailDetailsRegex) {
            CustomerForgetPasswordApi(customerForgetPassword)
                .then(res => {
                    console.log(res.data.data)
                    setEmailDetails(preState => ({ ...preState, emailDetailsLabel: emailDetails.emailDetailsValue, emailDetailsDisabled: true }))
                    setDisplayOTP(preState => ({ ...preState, display: '' }))
                    setButtonLogin('Enter Otp')
                    setFForgetResetPasswordCallValue('EnterOtpFunction')
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    const EnterOtpFunction = () => {
        let jetTokenDetailsRegex = jwtRegex.test(displayOTP.displayOTPValue)
        if (jetTokenDetailsRegex) {
            localStorage.setItem("token", displayOTP.displayOTPValue)
            setEmailDetails(preState => ({ ...preState, emailDetailsValue: '', emailDetailsDisabled: false }))
            setDisplayOTP(preState => ({ ...preState, displayOTPValue: '' }))
            setTextFieldValue(preState => ({ ...preState, textField1: 'Password', textField2: 'Confirm Password' }))
            setFForgetResetPasswordCallValue('ResetCustomerPassword')
            setButtonLogin('Reset Password')
        }
    }

    const ResetCustomerPassword = () => {
        let passwordDetailsRegex = passwordRegex.test(displayOTP.displayOTPValue)
        if (passwordDetailsRegex && (displayOTP.displayOTPValue === emailDetails.emailDetailsValue)) {
            console.log('password reset')
            let passwordResetData = {
                "passwords": emailDetails.emailDetailsValue,
                "confirm_passwords": displayOTP.displayOTPValue
            }
            CustomerResetPasswordApi(passwordResetData)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }


    const functionForgetResetPasswordCall = () => {

        switch (functionForgetResetPasswordCallValue) {
            case 'ForgetPasswordFuntion':
                console.log("ForgetPasswordFuntion call")
                ForgetPasswordFuntion()
                break;
            case 'EnterOtpFunction':
                console.log("EnterOtpFunction call")
                EnterOtpFunction()
                break;
            case 'ResetCustomerPassword':
                console.log("ResetCustomerPassword call")
                ResetCustomerPassword()
                break;
        }

    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#A03037' }}>
                    <Toolbar>
                        <img src={HeaderPagebookImage} alt="bookImageLogo" height='28px' width='30px' style={{ marginLeft: '9vw' }} />
                        <Typography variant="h6" noWrap component="div" sx={{ ml: '0.5vw' }}>
                            Bookstore
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className='ForgotPasswordMainDiv'>
                <div className='ForgotPasswordTextDiv'>Forgot your Password?</div>
                <Paper sx={{ width: '424px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }} variant="outlined" >
                    <div style={{ fontSize: '15px', width: '21vw', height: '40px', color: '#878787', textAlign: 'left', marginTop: '36px' }}>Enter your email address and we'll send you a link to reset your password.</div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>{textFieldValue.textField1}</div>
                        <TextField
                            id="outlined-basic4"
                            error={emailDetails.emailDetailsError}
                            helperText={emailDetails.emailDetailsHelperText}
                            value={emailDetails.emailDetailsValue}
                            className='InputEmailId'
                            variant="outlined"
                            size='small'
                            disabled={emailDetails.emailDetailsDisabled}
                            onChange={ForgotEmailTextField}
                            style={{ width: '21vw' }}
                        />
                    </div>
                    <div style={{ display: displayOTP.display }}>
                        <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>{textFieldValue.textField2}</div>
                        <TextField
                            id="outlined-basic4"
                            className='InputMobileNumber'
                            variant="outlined"
                            size='small'
                            value={displayOTP.displayOTPValue}
                            onChange={OtpValidater}
                            style={{ width: '21vw' }}
                        />
                    </div>
                    <Button
                        size="small"
                        variant="contained"
                        style={{ backgroundColor: '#A03037', textTransform: 'none', fontSize: '15px', marginBottom: '20px', width: '21vw' }}
                        onClick={functionForgetResetPasswordCall}
                    >
                        {buttonLogin}
                    </Button>
                    <Button
                        fullWidth={true}
                        variant="contained"
                        style={{ backgroundColor: '#F9F9F8', fontSize: '18px', height: '100px', border: '1px  #E4E4E4', color: '#0A0102', fontWeight: '650' }}
                    //onClick={SinupButton}
                    >
                        Create Account
                    </Button>
                </Paper>
            </div>

        </>
    )
}
export default ForgetResetPassword;