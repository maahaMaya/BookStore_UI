import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Header.css'

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderPagebookImage from '../../images/bookLogo.png'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { styled } from "@material-ui/core";
import { useNavigate } from "react-router-dom";


function Header(props) {
    const [shoppingCartIconDisplay, setShoppingCartIconDisplay] = useState({first:'none', second:''})
    let navigate = useNavigate();
    const ProfileIcon = () => {

    }
    const CartIcon = () => {
        DiplayCartIcon();
        navigate('/customerCart')
    }

    const PassDataToParent = (event) => {
        props.ListenToHeader(event.target.value)
    }

    const StyledBadge = styled(Badge)({
        "& .MuiBadge-badge": {
          color: "#fff",
          backgroundColor: "#A03037"
        }
      });

    const DiplayCartIcon = () => {
        if(localStorage.getItem("customerLogin")){
            setShoppingCartIconDisplay(preState => ({...preState, first:'', second:'none'}))
        }
        else{
            setShoppingCartIconDisplay(preState => ({...preState, first:'none', second:''}))
        }
    }

    return (
        <>
            <Box onLoad={DiplayCartIcon} sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#A03037' }}>
                    <Toolbar>
                        <img src={HeaderPagebookImage} alt="bookImageLogo" height='28px' width='30px' style={{ marginLeft: '9vw' }} />
                        <Typography variant="h6" noWrap component="div" sx={{ ml: '0.5vw' }}>
                            Bookstore
                        </Typography>
                        <TextField
                            placeholder="Search"
                            id="outlined-start-adornment"
                            size='small'
                            sx={{ ml: '6%', mr: '17.2%', width: '40%', backgroundColor: '#FCFCFC', borderRadius: '5px' }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                            }}
                        />
                        <Button color="inherit" style={{ display: 'flex', flexDirection: 'column', textTransform: 'none', marginRight: '2vw' }} onClick={ProfileIcon}>
                            <PersonOutlineRoundedIcon />
                            <div style={{ fontSize: '10px', marginTop: '4px' }}>Profile</div>
                            <div style={{ backgroundColor: '#FCFCFC', marginBottom: '-11px', width: '30px', height: '4px', borderRadius: '10px' }}></div>
                        </Button>
                        <Button color="inherit" style={{ display: 'flex', flexDirection: 'column', textTransform: 'none' }} onClick={CartIcon}>
                            <StyledBadge badgeContent={4} sx={{display: shoppingCartIconDisplay.first}}>
                                <ShoppingCartIcon />
                            </StyledBadge >
                            <ShoppingCartIcon sx={{display: shoppingCartIconDisplay.second}}/>
                            <div style={{ fontSize: '10px', marginTop: '4px' }}>Cart</div>
                            <div style={{ backgroundColor: '#FCFCFC', marginBottom: '-11px', width: '30px', height: '4px', borderRadius: '10px' }}></div>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div style={{ display: 'flex' , marginTop: '2vh', marginBottom: '2vh'}}>
                <div style={{marginLeft:'11vw'}}>
                    <span className="MainPageBookFirstText">Books</span><span className="MainPageBookSecondText">({props.headerData.BookArrayLength})</span>
                </div>
                <div style={{display: props.headerData.displaySelect, marginLeft:'63vw'}}>
                    <select onChange={PassDataToParent} name="books" id="booksSelect" style={{ width: '10vw', height: '3vh' }}>
                        <option value="default">default</option>
                        <option value="lowToHigh">Price : low to high</option>
                        <option value="highToLow">Price : high to low</option>
                        <option value="Availability">Books Availabile</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Header;