import React, { useEffect, useState } from "react";
import CartPage from "./CartPage";
import { GetCustomerBookInCartApi } from "../../Services/CartService";
function CartPageWithLogin() {
    const [toggle, setToggle] = useState({ cart: true, address: true, checkout: true })
    const [cartPageData, setCartPageData] = useState([])

    const ToggleCart = () => {
        setToggle(preState => ({ ...preState, cart: false }))
    }
    const ToggleAddress = () => {
        setToggle(preState => ({ ...preState, address: false }))
    }

    const ToggleCheckout = () => {
        setToggle(preState => ({ ...preState, checkout: false }))
    }

    const GetCustomerCartDataInCartPage = () => {
        GetCustomerBookInCartApi()
            .then(res => {
                setCartPageData(res.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        GetCustomerCartDataInCartPage();
    }, [])

    return (
        <>
            <br /><br />
            {
                toggle.cart ?
                    <div onClick={ToggleCart} style={{ border: '1px solid #DCDCDC', fontSize: '15px', color: '#333232', cursor: 'pointer', width: '60vw', height: '14vh', marginLeft: '14vw' }}>
                        <div style={{ float: 'left', marginTop: '5vh', marginLeft: '5vw', fontWeight: '500' }}>
                            Cart Page
                        </div>
                    </div> :
                    <div>
                        {
                            cartPageData.map(cart => (<CartPage cart={cart}/>))
                        }
                    </div>
            }
            <br /><br />
            {
                toggle.address ?
                    <div onClick={ToggleAddress} style={{ border: '1px solid #DCDCDC', fontSize: '15px', color: '#333232', cursor: 'pointer', width: '60vw', height: '14vh', marginLeft: '14vw' }}>
                        <div style={{ float: 'left', marginTop: '5vh', marginLeft: '5vw', fontWeight: '500' }}>
                            Address Details
                        </div>
                    </div> :
                    <div>11111111111111111111111111111</div>
            }
            <br /><br />
            {
                toggle.checkout ?
                    <div onClick={ToggleCheckout} style={{ border: '1px solid #DCDCDC', fontSize: '15px', color: '#333232', cursor: 'pointer', width: '60vw', height: '14vh', marginLeft: '14vw' }}>
                        <div style={{ float: 'left', marginTop: '5vh', marginLeft: '5vw', fontWeight: '500' }}>
                            Order summery
                        </div>
                    </div> :
                    <div>22222222222222222222222222222</div>
            }
        </>
    )
}

export default CartPageWithLogin;