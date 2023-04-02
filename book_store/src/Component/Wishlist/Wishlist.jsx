import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { DeleteWishlistApi } from "../../Services/WishlistService";

function Wishlist(props) {
    const DeleteWishlistCall = () => {
        let wishlist_idData = {
            "wishlist_id": props.wishlistRowData.wishlist_id
        }
        DeleteWishlistApi(wishlist_idData)
            .then(res => {
                props.AutoRefreshWishlistPage()
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <div style={{ display: 'flex', marginLeft: '3vw', gap: '35vw', marginTop: '3vh' }}>
                <div style={{ width: '20vw', height: '15vh', display: 'flex', gap: '1.5vw' }}>
                    <div>
                        <img src={props.wishlistRowData.book_image} height='85px' width='65px' alt="bookIamge" />
                    </div>
                    <div>
                        <div style={{ fontWeight: '480', fontSize: '18px', float: 'left' }}>{props.wishlistRowData.book_title}</div>
                        <br /><br />
                        <div style={{ fontSize: '12px', color: '#878787', float: 'left', marginTop: '-1.2vh' }}>{props.wishlistRowData.book_author}</div>
                        <br />
                        <div style={{ display: "flex", justifyContent: 'baseline', alignContent: 'baseline', fontSize: '10px', marginTop: '-4px' }}>
                            <div style={{ color: '#0A0102', fontWeight: '700', fontSize: '15px' }}>Rs. {props.wishlistRowData.book_discount_price}</div>
                            <span style={{ color: '#878787', marginLeft: '5px', fontSize: '12px', marginTop: '1.4px' }}><s>Rs. {props.wishlistRowData.book_actual_price}</s></span>
                        </div>
                    </div>
                </div>
                <IconButton onClick={DeleteWishlistCall} aria-label="remindMe" sx={{ width: '2vw', height: '2vw' }}>
                    <DeleteForeverIcon fontSize="medium" />
                </IconButton>
            </div>
        </>
    )
}

export default Wishlist;