import './styles/common.css';
import {modal_container} from './styles/common';
import React from 'react';
import { Grid, Box, Button, Modal, Typography } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useState } from 'react';

function NavBar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    function clearCookies(){
        document.cookie="academic=";
        document.cookie="index=";
        window.location.reload();
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container direction="row" justifyContent="space-around">
                <Grid item>
                    <h2 className='logo_text' style={{ color: '#34098D'}} onClick={clearCookies}>
                        Timetable <br /> Viewer
                    </h2>
                </Grid>
                <Grid item sx={{marginTop : "15px"}}>
                    <Button  onClick={handleOpen} variant="outlined" sx={{color : '#34098D'}} endIcon={<FilterAltIcon />}>
                        Filter
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modal_container}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                 
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                တနားချေပါနန်း မကြာခင်လုပ်လိုက်ပါမေ
                            </Typography>
                        </Box>
                    </Modal>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NavBar;