import { Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from "react";
import StarIcon from '@mui/icons-material/Star';
import './DisplayBook.css'
function DisplayBook() {
    return (
        <div className="DisplayBookMainDiv">
            <div className="DisplayBookFirstDiv">
                <div className="DisplayBookFirstDivFirstBox">
                    <div className="DisplayBookFirstDivFirstBoxFirst"></div>
                    <div className="DisplayBookFirstDivFirstBoxSecond" onClick={() => console.log("jo")}></div>
                </div>
                <div className="DisplayBookFirstDivSecondBox">
                    <div className="DisplayBookFirstDivSecondBoxImageBox">g</div>
                    <div className="DisplayBookFirstDivSecondBoxButtonBox">
                        <div>
                            <Button size="large" variant="contained" style={{ textTransform: 'none', fontSize: '14px', marginRight: '0.5vw', width: '11vw', backgroundColor: '#A03037' }}>
                                ADD TO BAG
                            </Button>
                        </div>
                        <div>
                            <Button size="large" variant="contained" style={{ textTransform: 'none', fontSize: '14px', marginRight: '0.5vw', width: '11vw', backgroundColor: '#333333' }}>
                                <FavoriteIcon sx={{ fontSize: 20 }} /> &nbsp; WISHLIST
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="DisplayBookSecondDiv">
                <div className="DisplayBookSecondDivBookDetails">
                    <div style={{ fontWeight: '400', fontSize: '28px', float: 'left' }}>Book Title Book Book Title Book </div>
                    <br /><br />
                    <div style={{ fontSize: '17px', color: '#878787', float: 'left', marginTop: '-5px' }}>bose</div>
                    <br /><br />
                    <div style={{ display: "flex", justifyContent: 'baseline', alignContent: 'baseline', fontSize: '14px', marginTop: '-8px' }}>
                        <div style={{ width: '50px', height: '22px', backgroundColor: '#388E3C' }}>4.8 <StarIcon sx={{ fontSize: 13, color: '#fff', marginTop: '2px' }} /></div>
                        <span style={{ color: '#878787', marginLeft: '5px' }}> &#10629;20&#10630;</span>
                    </div>
                    <div style={{ display: "flex", fontSize: '28px', marginTop: '8px' }}>
                        <div style={{ color: '#0A0102', fontWeight: '500' }}>Rs. 100</div>
                        <span style={{ color: '#878787', marginLeft: '5px', fontSize: '16px', marginTop: '8px', marginBottom: '15px' }}><s>Rs. 1000</s></span>
                    </div>
                    <hr style={{ border: '1px solid #9D9D9D' }} />
                    <div style={{marginTop:'2vw', marginBottom:'2vw'}}>
                        <div style={{ display: "flex", alignContent: 'baseline', alignItems: 'baseline', gap: '1vh' }}>
                            <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#878787' }}></div>
                            <div style={{ color: '#878787' }}>Book Detail</div>
                        </div>
                        <div style={{ color: '#373434', textAlign:'left', marginLeft:'1vw' }}>
                            See the documentation below for a complete reference to all
                            of the props and classes available to the components mentioned here.
                            See the documentation below for a complete reference to all of the props and
                            classes available to the components mentioned here.
                        </div>
                    </div>
                    <hr style={{ border: '1px solid #9D9D9D' }} />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default DisplayBook;