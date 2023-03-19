import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import HeaderPagebookImage from '../../images/bookLogo.png'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

function Header() {
    // const [toggleIcon, setToggleIcon] = useState(false)
    const ProfileIcon = () => {

    }
    const CartIcon = () => {
        
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#A03037' }}>
                    <Toolbar>
                        <img src={HeaderPagebookImage} alt="bookImageLogo" height='28px' width='30px' style={{marginLeft:'9vw'}}/>
                        <Typography variant="h6" noWrap component="div" sx={{ ml: '0.5vw' }}>
                            Bookstore
                        </Typography>
                        <TextField
                            placeholder="Search"
                            id="outlined-start-adornment"
                            size='small'
                            sx={{ ml: '6%', mr: '14%', width: '40%' , backgroundColor:'#FCFCFC', borderRadius:'5px'}}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                            }}
                        />
                        <Button color="inherit" style={{display:'flex', flexDirection:'column', textTransform: 'none', marginRight:'2vw' }} onClick={ProfileIcon}>
                            <PersonOutlineRoundedIcon/>
                            <div style={{fontSize:'10px', marginTop:'4px'}}>Profile</div>
                            <div style={{backgroundColor:'#FCFCFC',marginBottom:'-11px', width:'30px', height:'4px', borderRadius:'10px', display:''}}></div>
                        </Button>
                        <Button color="inherit" style={{display:'flex', flexDirection:'column', textTransform: 'none' }} onClick={CartIcon}>
                            <PersonOutlineRoundedIcon/>
                            <div style={{fontSize:'10px', marginTop:'4px'}}>Cart</div>
                            <div style={{backgroundColor:'#FCFCFC',marginBottom:'-11px', width:'30px', height:'4px', borderRadius:'10px',  display:''}}></div>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header;