import { Card } from '@mui/material'
import React from 'react';
import '../components/css/Pages.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp() {
    return (
        <div className='signup-container'>
            <Card className='signup-card'>
                <div className='signup-form'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="google" width={'100px'} />
                    <p className='signup-txt1'>Create your Google Account</p>
                    <p>to continue to Gmail</p><br />
                    <div className='signup-inputs'>
                        <TextField id="name" label="Enter your fullname" variant="outlined" />
                        <TextField id="username" label="Username" variant="outlined" />
                        <TextField id="password" label="Password" variant="outlined" />
                        <TextField id="password" label="Re-enter password" variant="outlined" />
                        <Button variant="outlined">Sign Up</Button>
                    </div>
                </div>
                <div className='signup-right'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Google_account_icon.svg/803px-Google_account_icon.svg.png" alt="oneAccount" width={'250px'} />
                    <p>One account. All of Google</p>
                    <p>working for you.</p>
                </div>
            </Card>
        </div>
    )
}

export default SignUp