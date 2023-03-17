import React from "react";
import './Login.css'

import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(2),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '20vw',
        padding: '10px 12px',
    },
}));

function Login() {
    return (
        <>
            <div className="LoginMainDiv">
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input" error={true}>
                        Email Id
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">
                        Password
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" type="password" />
                    <div className="ForgetPasswordDiv">Forget Password?</div>
                </FormControl>
                <Button className="LoginFormButton" size="large" variant="contained" style={{ backgroundColor: '#A03037', textTransform: 'none', fontSize: '17px', marginTop: '15px' }}>
                    Login
                </Button>
                <div className="OrTextDiv">
                    <div style={{ width: '5vw', height: '2px', backgroundColor: 'red', marginTop: '22px' }}></div>
                    <h4 style={{ marginTop: '8px' }}>OR</h4>
                    <div style={{ width: '5vw', height: '2px', backgroundColor: 'red', marginTop: '22px' }}></div>
                </div>
                <div className="FaceBookGoogleFormButton">
                    <Button size="large" variant="contained" style={{ textTransform: 'none', fontSize: '17px', marginRight:'0.5vw', width:'10.5vw' }}>
                        FaceBook
                    </Button>                
                    <Button size="large" variant="outlined" style={{  textTransform: 'none', fontSize: '17px',  width:'10.5vw' }}>
                        Google
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Login;