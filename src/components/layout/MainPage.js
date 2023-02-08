import React from 'react';
import '../css/MainPage.css';
import EmailList from './EmailList';
import SideBar from './SideBar';
import SideIcons from './SideIcons';

function MainPage() {
    return (
        <div className='main-container'>
            <SideBar />
            <EmailList />
            <SideIcons />
        </div>
    )
}

export default MainPage