import { Card } from '@mui/material';
import React from 'react';
import '../components/css/Pages.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function HomePage() {
    return (
        <div className='home-container'>
            <div>
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png" alt="welcome" width={'500px'} />
            </div>
            <Card className='sigin-container'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="google" width={'100px'} />
                <p className='sigin-txt1'>Sign in</p>
                <p>to continue to Gmail</p><br />
                <div className='sigin-inputs'>
                    <TextField id="email" label="Email" variant="outlined" />
                    <TextField id="password" label="Enter your password" variant="outlined" />
                    <Button variant="contained">Submit</Button>
                </div>
                <br /><hr /><br />
                <Button>Create Account</Button>
                <br />
            </Card>
        </div>
    )
}

export default HomePage