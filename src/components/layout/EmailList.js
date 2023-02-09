import React from 'react'
import EmailItem from '../body/EmailItem';
import EmailTopBar from '../body/EmailTopBar';
import '../css/MailBody.css';
import { emailData } from '../temp/EmailData';

function EmailList() {
    return (
        <div className='body-container'>
            <EmailTopBar />
            <div className='emails-container'>
                {emailData.map(({ starred, from, subject, message, time, read }) => (
                    <EmailItem
                        starred={starred}
                        from={from}
                        subject={subject}
                        message={message}
                        time={time}
                        read={read}
                    />
                ))}
            </div>
        </div>
    )
}

export default EmailList