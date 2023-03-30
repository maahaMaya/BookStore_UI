import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CartPageImage from '../../images/CartPage.png'
function CartPageWithoutLogin() {
    let navigate = useNavigate();
    const CartPageToLogin = () => {
        navigate("/loginSignup")
    }
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
                <div style={{ fontSize: '25px', fontWeight: '500' }}>PLEASE LOG IN</div>
                <div style={{ color: '#9D9D9D', fontSize: '15px', marginTop:'2vh' }}>Login to view items in your wishlist.</div>
                <img src={CartPageImage} alt="cartPage" width="66px" height="72px" style={{marginTop:'4vh', marginBottom:'4vh'}}/>
                <Button variant="outlined" sx={{color:"#A03037", border:'1px solid #A03037'}} onClick={CartPageToLogin}>
                    LOGIN/SIGNUP
                </Button>
            </div>
        </>
    )
}

export default CartPageWithoutLogin;