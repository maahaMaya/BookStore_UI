import React from "react";
import Paper from '@mui/material/Paper';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';

function BookBox() {
    return (
        <>
            <Paper sx={{ width: '235px', height: '275px', margin:'100px' }} variant="outlined" >
                <Paper sx={{ width: '233px', height: '172px', backgroundColor:'#F5F5F5' , display:'flex', justifyContent:'center', alignItems:'center'}} variant="outlined" >
                    <img src="https://5.imimg.com/data5/PF/EO/MY-43915840/srimad-bhagavad-gita-as-it-is.jpg" height='109px' width='135px' alt="bookIamge"/>
                </Paper>
                <div style={{float:'left', marginTop:'4px', marginLeft:'12px'}}  >
                    <div style={{fontWeight:'500', fontSize:'14px'}}>Book title book title</div>
                    <div style={{ fontSize:'10px', color:'#878787', float:'left'}}>By Author title</div>
                    <br/>
                    <div style={{display:"flex", justifyContent:'baseline', alignContent:'baseline', fontSize:'10px'}}>
                        <div style={{width:'35px', height:'16px', backgroundColor:'#388E3C' }}>5.5 <StarBorderPurple500OutlinedIcon sx={{ fontSize: 10, color:'#fff', marginTop:'2px'}}/></div>
                        <span style={{color:'#878787', marginLeft:'5px'}}> &#10629;20&#10630;</span>
                    </div>
                    <div style={{display:"flex", justifyContent:'baseline', alignContent:'baseline', fontSize:'10px', marginTop:'4px'}}>
                        <div style={{color:'#0A0102', fontWeight:'700' }}>Rs. 500</div>
                        <span style={{color:'#878787', marginLeft:'5px'}}><s>Rs. 1000</s></span>
                    </div>
                </div>
            </Paper>
        </>
    )
}
export default BookBox;