import React, { useEffect, useState } from "react";
import CartPageWithLogin from "./CartPageWithLogin";
import CartPageWithoutLogin from "./CartPageWithoutLogin";

function Cart() {
    const [cartToggle, setCartToggle] = useState(true)

    useEffect(() => {
        if (localStorage.getItem("customerLogin")) {
            setCartToggle(false)
            console.log("setCartToggle(false)")
        }
        else {
            console.log("setCartToggle(true)")
        }
    }, [])
    return (
        <div>
            {
                cartToggle ? <CartPageWithoutLogin /> : <CartPageWithLogin />
            }
        </div>
    )
}

export default Cart;