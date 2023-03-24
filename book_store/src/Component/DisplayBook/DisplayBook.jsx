import { Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from "react";
import StarIcon from '@mui/icons-material/Star';
import './DisplayBook.css'
import Rating from '@mui/material/Rating';
import InputBase from '@mui/material/InputBase';


function DisplayBook() {

    const [value, setValue] = React.useState(2);
    return (
        <div className="DisplayBookMainDiv">
            <div className="DisplayBookFirstDiv">
                <div className="DisplayBookFirstDivFirstBox">
                    <div className="DisplayBookFirstDivFirstBoxFirst" style={{border:'1px solid red'}}>
                        <img src="https://i1.sndcdn.com/artworks-000424577547-k9pxfv-t3000x3000.jpg" height="43px" width="33px" />
                    </div>
                    <div className="DisplayBookFirstDivFirstBoxSecond" onClick={() => console.log("jo")}>
                        <img src="https://i1.sndcdn.com/artworks-000424577547-k9pxfv-t3000x3000.jpg" height="43px" width="33px" />
                    </div>
                </div>
                <div className="DisplayBookFirstDivSecondBox">
                    <div className="DisplayBookFirstDivSecondBoxImageBox">
                        <img src="https://i1.sndcdn.com/artworks-000424577547-k9pxfv-t3000x3000.jpg" height="360px" width="260px" />
                    </div>
                    <div className="DisplayBookFirstDivSecondBoxButtonBox">
                        <div>
                            <Button size="large" variant="contained" style={{ textTransform: 'none', fontSize: '14px', marginRight: '0.5vw', width: '11vw', backgroundColor: '#A03037', display: '' }}>
                                ADD TO BAG
                            </Button>
                            {/* <div style={{ width: '11vw', border: '1px solid red' }}>
                                <Icon baseClassName="fas" className="fa-plus-circle" sx={{ fontSize: 30 }} />
                                
                            </div> */}

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
                    <div>
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
                        <div style={{ marginTop: '2vw', marginBottom: '2vw' }}>
                            <div style={{ display: "flex", alignContent: 'baseline', alignItems: 'baseline', gap: '1vh' }}>
                                <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#878787' }}></div>
                                <div style={{ color: '#878787' }}>Book Detail</div>
                            </div>
                            <div style={{ color: '#373434', textAlign: 'left', marginLeft: '1vw', height: '100%' }}>
                                See the documentation below for a complete reference to all
                                of the props and classes available to the components mentioned here.
                                See the documentation below for a complete reference to all
                                of the props and classes available to the components mentioned here.
                                See the documentation below for a complete reference to all
                            </div>
                        </div>
                        <hr style={{ border: '1px solid #9D9D9D' }} />
                    </div>
                    <div>
                        <div style={{ fontWeight: '400', fontSize: '22px', float: 'left', color: '#0A0102' }}>Book Title Book Book Title Book </div>
                        <br /><br />
                        <div style={{ height: '24vh', backgroundColor: '#F5F5F5' }}>
                            <div style={{ fontSize: '14px', float: 'left', marginLeft: '1vw' }}>Overall Rating</div>
                            <br />
                            <Rating name="no-value" value={null} sx={{ float: 'left', marginLeft: '1vw', fontSize: 28 }} />
                            <br /><br />
                            <InputBase
                                placeholder="Standard warning"
                                multiline
                                sx={{ width: '93%', height: '4vw', backgroundColor: '#fff' }} />
                            <br /><br />
                            <Button size="small" variant="contained" style={{ textTransform: 'none', fontSize: '14px', marginRight: '1.3vw', width: '6vw', backgroundColor: '#3371B5', float: 'right' }}>
                                Submit
                            </Button>
                        </div>
                        <br />
                    </div>
                </div>

                {/* <div className="DisplayBookSecondDivCustomerFeedbackAdd">

                </div> */}
            </div>
        </div>
    )
}

export default DisplayBook;