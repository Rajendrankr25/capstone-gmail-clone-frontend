import React from 'react';
import Compose from '../buttons/Compose';
import '../css/SideBar.css';
import { sideBarBtnItems } from '../buttons/SideBarBtnItem';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LabelIcon from '@mui/icons-material/Label';

function SideBar() {
    return (
        <div className='sidebar-container'>
            <div className='compose-container'>
                <Compose />
            </div>
            <div>
                {sideBarBtnItems.map(item => (
                    <div className='sidebar-btns'>
                        {item.icon} {item.text}
                    </div>
                ))}
            </div>
            <div className='labels-container'>
                <div className='label-head'>
                    <span>Labels</span>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                </div>
                <div className='label-btns'>
                    <LabelIcon /><p>Notes</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar