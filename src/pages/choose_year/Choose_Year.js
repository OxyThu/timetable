import { Grid, FormControl, InputLabel, Select, MenuItem, Button, Box } from '@mui/material';
import { useState } from 'react';
import './styles/cy.css';
import { TRUE } from 'sass';
import available_class from '../../utils/data/class';

  


function Category_List() {
    const [academic, setAcademic] = useState();
    const [chooseRoom, setChooseRoom] = useState();
    const [room, setRoom] = useState([]);
    const [ selectAcademic, setSelectAcademic] = useState(false);
    const [ selectRoom , setSelectRoom ] = useState(false);
    function select_academic(e){
     setRoom(available_class[Number(e.target.value)].classes);
     document.cookie = `index=${Number(e.target.value)}`;
     setSelectAcademic(true);
     setSelectRoom(false);
    }

    function select_class_room(e){
        setChooseRoom(e.target.value);
        document.cookie = `academic=${e.target.value}`;
        setSelectRoom(true);
    }

    function linkTo(){
        window.location.reload(false);
    }

    return (
        <>
            <Grid container spacing={1} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
                    <Grid item>
                    <h2 className='text' style={{ color: '#34098D' }}>
                        Timetable <br/> Viewer
                    </h2>
                    </Grid>
                   
                    <Grid item style={{marginBottom : "10px"}}>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Select Your Academic Year</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={academic}
                            label="Select Your Academic Year"
                            onChange={select_academic}
                            className="selectBox"
                        >
                            {available_class.map((ac , index) => {
                                return (
                                    <MenuItem key={index} value={ac.code}> {ac.academic_year}</MenuItem>
                                )
                            })}
                          
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Select Your Class Room</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={chooseRoom}
                            label="Select Your Class Room"
                            onChange={select_class_room}
                            className="selectBox"
                        >
                            {room.map((rm, index) => {
                                return (
                                    <MenuItem key={index} value={rm.class_code}> {rm.class_name}</MenuItem>
                                )
                            })}
                          
                        </Select>
                    </FormControl>

                    <div style={{textAlign : "center", marginTop : "30px"}}>
                        { selectAcademic && selectRoom && <Button variant='contained' onClick={linkTo} fullWidth>OK</Button>}
                    </div>
                    </Grid>
                    
                </Grid>
        </>

    )
}

export default Category_List;