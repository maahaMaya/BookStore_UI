import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import NativeSelect from '@mui/material/NativeSelect';
import { Button } from "@mui/material";
import { GetAllBookByIdApi } from "../../Services/BookService";
import { AddBookInCustomerCartApi } from "../../Services/CartService";

function CartPage(props) {
    const [customerOrderData, setCustomerOrderData] = useState({ address: '' });
    const [getBookById, setGetBookById] = useState([]);
    const [calculatePrice, setCalculatePrice] = useState({ totalBookActualPrice: 1, totalBookDiscountPrice: 1 });
    const [bookCartUpdate, setBookCartUpdate] = useState(props.cart.book_quantity)

    const handleChange = (event) => {
        setCustomerOrderData(preState => ({ ...preState, address: event.target.value }));
    };

    const DecreaseAddToCartButton = () => {
        if (bookCartUpdate > 0) {
            let bookCartData = {
                "book_id": props.cart.book_id,
                "book_quantity": -1
            }
            AddBookInCustomerCartApi(bookCartData)
                .then(res => {
                    GetBookById(props.cart.book_id)
                    setBookCartUpdate(bookCartUpdate - 1)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    const IncreaseAddToCartButton = () => {
        let bookCartData = {
            "book_id": props.cart.book_id,
            "book_quantity": 1
        }
        AddBookInCustomerCartApi(bookCartData)
            .then(res => {
                GetBookById(props.cart.book_id)
                setBookCartUpdate(bookCartUpdate + 1)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const GetBookById = (id) => {
        GetAllBookByIdApi(id)
            .then(res => {
                setGetBookById(res.data.data)
                CalculateTotalPrice()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const CalculateTotalPrice = () => {
        let totalBookActualPrices = getBookById.book_actual_price * bookCartUpdate;
        let totalBookDiscountPrices = getBookById.book_discount_price * bookCartUpdate;
        setCalculatePrice(preState => ({ ...preState, totalBookActualPrice: totalBookActualPrices, totalBookDiscountPrice: totalBookDiscountPrices }))

    }


    useEffect(() => {
        GetBookById(props.cart.book_id)
    }, [])

    useEffect(() => {
        CalculateTotalPrice();
    }, [getBookById])

    return (
        <>
            <br /><br />
            <div style={{ width: '100vw', height: '100%', display: "flex", marginLeft: '14vw' }}>
                <div style={{ width: '60vw', height: '30vh', border: '1px solid #E4E4E4', display: 'flex', flexDirection: 'column', gap: '3vh' }}>
                    <div style={{ display: 'flex', marginLeft: '3vw', marginTop: '1.5vh', gap: '40vw' }}>
                        <div style={{ fontWeight: '600', fontSize: '18px' }}>My cart</div>
                        <div>
                            <NativeSelect
                                defaultValue={1}
                                onChange={handleChange}
                                style={{ width: '10vw', height: '3.6vh', border: '1px solid #DCDCDC' }}
                            >
                                <option value={1}>Selct address</option>
                                <option value={1}>Home</option>
                                <option value={2}>Office</option>
                            </NativeSelect>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginLeft: '3vw', gap: '24vw' }}>
                        <div style={{ width: '20vw', height: '11.8vh', display: 'flex', gap: '1.5vw' }}>
                            <div>
                                <img src={getBookById.book_image} height='85px' width='65px' alt="bookIamge" />
                            </div>
                            <div>
                                <div style={{ fontWeight: '480', fontSize: '18px', float: 'left' }}>{getBookById.book_title}</div>
                                <br /><br />
                                <div style={{ fontSize: '12px', color: '#878787', float: 'left', marginTop: '-1.2vh' }}>{getBookById.book_author}</div>
                                <br />
                                <div style={{ display: "flex", justifyContent: 'baseline', alignContent: 'baseline', fontSize: '10px', marginTop: '-4px' }}>
                                    <div style={{ color: '#0A0102', fontWeight: '700', fontSize: '15px' }}>Rs. {calculatePrice.totalBookDiscountPrice}</div>
                                    <span style={{ color: '#878787', marginLeft: '5px', fontSize: '12px', marginTop: '1.4px' }}><s>Rs. {calculatePrice.totalBookActualPrice}</s></span>
                                </div>
                                <br />
                                <div style={{ display: 'flex', gap: '1vw' }}>
                                    <div>
                                        <div style={{ display: 'flex', width: '7vw', gap: '1.4vh', height: '4vh' }}>
                                            <div onClick={DecreaseAddToCartButton} style={{ width: '1.5vw', height: '1.6vw', border: '1px solid #DBDBDB', borderRadius: '50%', cursor: 'pointer' }}>
                                                <RemoveIcon sx={{ marginTop: '1px', fontSize: 20 }} />
                                            </div>
                                            <div style={{ width: '2.2vw', height: '1.5vw', border: '1px solid #DBDBDB', color: '#333232', fontSize: '16PX' }}>
                                                {bookCartUpdate}
                                            </div>
                                            <div onClick={IncreaseAddToCartButton} style={{ width: '1.5vw', height: '1.5vw', border: '1px solid #DBDBDB', borderRadius: '50%', cursor: 'pointer' }}>
                                                <AddIcon sx={{ marginTop: '1px', fontSize: 20 }} />
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant="text" sx={{ textTransform: 'none', fontSize: '14px', color: "#0A0102", marginTop: '-0.7vh' }}>
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Button variant="contained" sx={{ fontSize: '14px', color: "#0A0102", height: '4.6vh', width: "10vw", color: '#fff', backgroundColor: '#3371B5', marginTop: '14vh' }}>
                            Place order
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage;