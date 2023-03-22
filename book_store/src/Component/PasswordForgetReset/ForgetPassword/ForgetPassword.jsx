import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './ForgetPassword.css'

function ForgetPassword() {
    const [emailDetails, setEmailDetails] = useState({ emailDetailsValue: '', emailDetailsLabel:'',emailDetailsError: false, emailDetailsHelperText: ' ', emailDetailsDisabled: false })
    const [displayOTP, setDisplayOTP] = useState({ displayOTPValue: '', display: 'none' })
    const [buttonLogin, setButtonLogin] = useState('Reset Password');


    const ForgotEmailValue = (e) => {

    }

    const OtpValidater = () => {

    }

    return (
        <>
            <div className='ForgotPasswordMainDiv'>
                <div className='ForgotPasswordTextDiv'>Forgot your Password?</div>
                <Paper sx={{ width: '424px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap:'12px'}} variant="outlined" >
                    <div style={{ fontSize: '15px', width: '21vw', height: '40px', color: '#878787', textAlign: 'left', marginTop: '36px' }}>Enter your email address and we'll send you a link to reset your password.</div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>Email Id</div>
                        <TextField
                            id="outlined-basic4"
                            error={emailDetails.emailDetailsError}
                            helperText={emailDetails.emailDetailsHelperText}
                            label={emailDetails.emailDetailsLabel}
                            className='InputEmailId'
                            variant="outlined"
                            size='small'
                            disabled={emailDetails.emailDetailsDisabled}
                            onChange={ForgotEmailValue}
                            style={{ width: '21vw' }}
                        />
                    </div>
                    <div style={{display:displayOTP.display}}>
                        <div style={{ display: 'flex', justifyContent: 'start', cursor: 'pointer', fontSize: '10px' }}>OTP</div>
                        <TextField
                            id="outlined-basic4"
                            className='InputMobileNumber'
                            variant="outlined"
                            size='small'
                            onChange={OtpValidater}
                            style={{ width: '21vw' }}
                        />
                    </div>
                    <Button
                        className="SingUpFormButton"
                        size="small"
                        variant="contained"
                        style={{ backgroundColor: '#A03037', textTransform: 'none', fontSize: '15px', marginBottom:'20px'}}
                         
                    >
                        {buttonLogin}
                    </Button>
                    <Button
                        className="SingUpFormButton"
                        fullWidth={true}
                        variant="contained"
                        style={{ backgroundColor: '#F9F9F8', fontSize: '18px', height:'100px', border:'1px  #E4E4E4', color:'#0A0102', fontWeight:'650'}}
                        //onClick={SinupButton}
                    >
                        Create Account
                    </Button>
                </Paper>
            </div>

        </>
    )
}
export default ForgetPassword;