import React from "react";
import './Singup.css'

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

function Singup() {
    return (
        <>
            <div className="SingupMainDiv">
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input" error={true}>
                        Full Name
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" />
                </FormControl>
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
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">
                        Mobile Number
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" />
                </FormControl>
                <Button className="SingUpFormButton" size="large" variant="contained" style={{backgroundColor:'#A03037', textTransform:'none', fontSize:'17px', marginTop:'15px'}}>
                    Singup
                </Button>
            </div>
        </>
    )
}

export default Singup;