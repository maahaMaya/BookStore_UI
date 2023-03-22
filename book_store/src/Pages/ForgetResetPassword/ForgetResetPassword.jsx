import React, { useState } from "react";

import './ForgetResetPassword.css'
import HeaderPagebookImage from '../../images/bookLogo.png'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ResetPassword from "../../Component/PasswordForgetReset/ResetPassword/ResetPassword";
import ForgetPassword from "../../Component/PasswordForgetReset/ForgetPassword/ForgetPassword";

function ForgetResetPassword() {
    const [toggleResetForget , setToggleResetForget] = useState(true)
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
            <div style={{marginTop:'110px'}}>
                {
                    toggleResetForget ? <ForgetPassword/> :<ResetPassword/>
                }
            </div>
        </>
    )
}
export default ForgetResetPassword;