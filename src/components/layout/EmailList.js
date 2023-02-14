import React, { useEffect, useState } from 'react'
import EmailItem from '../body/EmailItem';
import EmailTopBar from '../body/EmailTopBar';
import '../css/MailBody.css';
import { API } from "../../global";

function EmailList() {

    const [emailData, setEmailData] = useState([]);
    const mailCount = emailData.length;

    const getEmailData = () => {
        fetch(`${API}/inbox`, { method: "GET" })
            .then((data) => data.json())
            .then((mails) => setEmailData(mails));
    }

    useEffect(() => getEmailData(), []);

    return (
        <div className='body-container'>
            <EmailTopBar mailCount={mailCount} />
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