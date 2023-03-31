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
export default function DisplayFeedback(props) {
    return (
        <>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Avatar {...stringAvatar(props.feedback.fullname)} />
                <div style={{ color: '#0A0102', fontSize: '20px', fontWeight: '450', marginTop: '5px' }}>{props.feedback.fullname}</div>
            </div>
            <div style={{ float: 'left', marginLeft: '2.5vw' }}>
                <Rating name="half-rating-disabled" value={props.feedback.feedback_rating} disabled   precision={0.5}/>
            </div>
            <br/>
            <div style={{ textAlign: 'left', float: 'left', marginLeft: '-7.3vw' }}>
                {props.feedback.feedback_comment}
            </div>
            <br /><br /><br /><br />
        </>
    )
}
