import React from "react";
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: '#E4E4E4',
            color: '#707070',
            fontSize: '14px'
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}
export default function DisplayFeedback() {
    return (
        <>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Avatar {...stringAvatar('Kent Dodds')} />
                <div style={{ color: '#0A0102', fontSize: '20px', fontWeight: '450', marginTop: '5px' }}>Kent Dodds</div>
            </div>
            <div style={{ float: 'left', marginLeft: '2.5vw' }}>
                <Rating name="disabled" value={3} disabled />
            </div>
            <div style={{textAlign:'left', float: 'left', marginLeft: '2.5vw' }}>
                img elements must have an alt prop, either with meaningful text, or an empty string for decorative images
            </div>
            <br/><br/><br/><br/>
        </>
    )
}
