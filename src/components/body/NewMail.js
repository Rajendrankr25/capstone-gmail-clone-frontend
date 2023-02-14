import * as React from 'react';
import '../css/BtnsCss.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 500,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 14,
    p: 4,
};

export default function NewMail() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className='compose-btn' onClick={handleOpen}>
                <EditIcon fontSize='medium' />
                <p>Compose</p>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='newMail-container'>
                        <div className='newMail-head'>New Message</div>
                        <div className='newMail-inputs'>
                            <TextField className='receiptant' label="Receiptant" variant="standard" />
                            <TextField className='subject' label="Subject" variant="standard" />
                            <TextField className='message' label="Message" multiline rows={8} />
                        </div><br />
                        <Button variant="contained">Send</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}