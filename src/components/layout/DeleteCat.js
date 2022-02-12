import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const DeleteCat = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    return (
        <>
            <Button
                variant='contained'
                color='error'
                className='delete'
                onClick={ handleOpen}>

                Delete
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" sx={{ mt: 2 }}>
                        Удаления котика
                    </Typography>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        Вы точно уверены, что хотите удалить котика?
                    </Typography>
                    <Button variant='contained' color='error'>Удалить котика</Button>
                    <Button variant='outlined' onClick={handleClose} className="back" >
                        Вернуться обратно
                    </Button>

                </Box>

            </Modal>
        </>
    )
}



export default DeleteCat