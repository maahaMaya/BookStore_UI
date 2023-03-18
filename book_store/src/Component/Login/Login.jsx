import React, { useState } from "react";
import './Login.css'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Login() {
    const [customerLoginDetails, setCustomerLoginDetails] = useState({ email_id: '', passwords: ''});
    const [regexCustomerLoginDetails, setRegexCustomerLoginDetails] = useState({  email_idError: false, email_idHelperText: '', passwordsError: false, passwordsHelperText: ''});

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
                       style={{width:'21vw'}}
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
                        style={{width:'21vw'}}
                    />
                    <div style={{ display: 'flex', justifyContent: 'end', cursor: 'pointer' ,fontSize: '12px', color:'#9D9D9D'}}>Forget Password?</div>
                </div>
                <Button className="LoginFormButton" size="large" variant="contained" style={{ backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '15px' }}>
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
                    <Button size="large" variant="outlined" style={{ textTransform: 'none', fontSize: '17px', width: '10.5vw', backgroundColor: '#F5F5F5', borderColor: '#E4E4E4', color: '#0A0102' }}>
                        Google
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Login;