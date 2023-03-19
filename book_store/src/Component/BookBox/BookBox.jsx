import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';

function BookBox() {
    const outOfStockVal = true;
    const [outOfStock, setOutOfStock] = useState({divFirstDisplay:'',divFirstColor:'#F5F5F5', divSecondColor:'#FFFFFF'})
    
    const pageLoadCall = () => {
        if(outOfStockVal === true){
            setOutOfStock(preState => ({...preState , divFirstDisplay:'',divFirstColor:'#00000029', divSecondColor:'#F5F5F5'}))
        }
        else{
            setOutOfStock(preState => ({...preState , divFirstDisplay:'none',divFirstColor:'#F5F5F5', divSecondColor:'#FFFFFF'}))
        }
    }
    return (
        <>
            <Paper onLoad={pageLoadCall} sx={{ width: '235px', height: '275px', margin: '100px', position:'relative' }} variant="outlined"  >
                <div style={{ zIndex: '2',  position:'absolute', marginLeft: '28px',marginTop:'128px', width: '178px', height: '37px', backgroundColor: '#FFFFFF', fontSize:'15px',display: outOfStock.divFirstDisplay}}>
                    <div style={{marginTop:'7px', fontWeight:'500'}}>OUT OF STOCK</div>
                </div>
                <div style={{zIndex: '1', position:'absolute'}}>
                    <Paper sx={{ width: '233px', height: '172px', backgroundColor: outOfStock.divFirstColor, display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant="outlined" >
                        <img src="https://5.imimg.com/data5/PF/EO/MY-43915840/srimad-bhagavad-gita-as-it-is.jpg" height='109px' width='135px' alt="bookIamge" />
                    </Paper>
                    <div style={{ paddingTop: '4px', paddingLeft: '12px',width:'225px',height:'97px', backgroundColor: outOfStock.divSecondColor}}  >
                        <div style={{ fontWeight: '500', fontSize: '14px', float:'left' }}>Book title book title</div>
                        <br/>
                        <div style={{ fontSize: '10px', color: '#878787', float: 'left' }}>By Author title</div>
                        <br />
                        <div style={{ display: "flex", justifyContent: 'baseline', alignContent: 'baseline', fontSize: '10px' }}>
                            <div style={{ width: '35px', height: '16px', backgroundColor: '#388E3C' }}>5.5 <StarBorderPurple500OutlinedIcon sx={{ fontSize: 10, color: '#fff', marginTop: '2px' }} /></div>
                            <span style={{ color: '#878787', marginLeft: '5px' }}> &#10629;20&#10630;</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: 'baseline', alignContent: 'baseline', fontSize: '10px', marginTop: '4px' }}>
                            <div style={{ color: '#0A0102', fontWeight: '700' }}>Rs. 500</div>
                            <span style={{ color: '#878787', marginLeft: '5px' }}><s>Rs. 1000</s></span>
                        </div>
                    </div>
                </div>
            </Paper>
        </>
    )
}
export default BookBox;