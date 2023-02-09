import React, { useState } from 'react';
import '../css/MailBody.css';
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Card, IconButton } from '@mui/material';

function EmailItem({ starred, from, subject, message, time, read }) {

    const [star, setStar] = useState(starred);

    return (
        <Card className='mailItem-container'>
            <Checkbox size='small' />
            <IconButton onClick={() => star ? setStar(false) : setStar(true)}>
                {star ? <StarIcon htmlColor='#f7cb69' /> : <StarOutlineIcon />}
            </IconButton>
            <p className={!read && 'unread'}>{from}</p>
            <div className='sub-msg'>
                <p className={!read && 'unread'}>{subject}</p>&nbsp;-&nbsp;<span>{message}</span>
            </div>
            <p className={!read && 'unread'}>{time}</p>
        </Card>
    )
}

export default EmailItem