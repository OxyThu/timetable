import { Grid } from '@mui/material';
import NavBar from '../../common_components/NavBar';
import './styles/daily.css';
import styles from './styles/daily';
import { timetable, time } from '../../utils/data/timetable';
import holiday_data from '../../utils/data/holiday';
import React from 'react';
import { useState, useEffect } from 'react';
import { getCookie, getDay } from '../../utils/common';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import Moment from 'react-moment';


function Daily() {
    const [timeTable, setTimeTable] = useState([]);
    const [dayName, setDayName] = useState();
    const [ date, setDate] = useState();
    const [ count, setCount] = useState(0);
    // const [ holiday, setHoliday] =useState([]);
    useEffect(() => {
        let dayObj = getDay(count);
        setDayName(dayObj.name);
        let day = dayObj.code;
        setDate(dayObj.date);
        let holiday = holiday_data(dayObj.date);
        // setHoliday(holiday_d);

        // setHoliday(date);
        if(day === 7){
            // time[0] = "RELAX";
            setTimeTable([
                "HAPPY WEEKEND 👻❤️😙🍕"
            ])
        }else if(holiday.length > 0) {
            setTimeTable([
                holiday[0].name
            ])
        }else{
            let cookie = getCookie("academic");
            if (cookie) {
                switch (cookie) {
                    case "first_yearA": setTimeTable(timetable.first_yearA[day].subject); break;
                    case "first_yearB": setTimeTable(timetable.first_yearB[day].subject); break;
                    case "second_junior_A": setTimeTable(timetable.second_junior_A[day].subject); break;
                    case "second_junior_B": setTimeTable(timetable.second_junior_B[day].subject); break;
                    case "second_senior_CS": setTimeTable(timetable.second_senior_CS[day].subject); break;
                    case "second_senior_CT": setTimeTable(timetable.second_senior_CT[day].subject); break;
                    case "third_cs_A": setTimeTable(timetable.third_cs_A[day].subject); break;
                    case "third_cs_B": setTimeTable(timetable.third_cs_B[day].subject); break;
                    case "third_ct": setTimeTable(timetable.third_ct[day].subject); break;
                    case "fourth_yearCS": setTimeTable(timetable.fourth_yearCS[day].subject); break;
                    case "fourth_yearCT": setTimeTable(timetable.fourth_yearCT[day].subject); break;
                    default: setTimeTable(timetable.test[day].subject); break;
                }
            }
            
        }
    }, [count])

    function decrease(){
        if(count <= 0){
            setCount(6);
        }else{
            setCount(count-1);
        }
    }

    function increase(){
        if(count >= 6){
            setCount(0);
        }else{
            setCount(count+1);
        }
    }

    return (    
        <>
            <NavBar />
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={8}>
                        <Grid item>
                            <ArrowCircleLeftSharpIcon sx={{fontSize : "50px"}} className="icon" onClick={decrease}/>
                        </Grid>
                        <Grid item sx={{textAlign : "center"}}>
                            <span> {dayName}<br/>
                            <Moment format="DD-MM-YYYY">
                                 {date}
                            </Moment>
                            </span> 

                        </Grid>
                        <Grid item>
                        <ArrowCircleRightSharpIcon sx={{fontSize : "50px"}} className="icon" onClick={increase}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ marginTop: 1 }}>
                    <Grid container justifyContent="center" >
                        <Grid item xs={12} md={7} sx={styles.daily_container} >
                            {timeTable.map((tt, index) => {
                                return (
                                    <div className='testBox' key={index}>
                                        <div className='_time'>
                                            <span> { timeTable.length > 1  ? time[index] : "Ralax"} </span>
                                        </div>
                                        <div className='_subject'>
                                            <span>
                                            {tt===null ? "အတန်းချိန်မရှိပါကိုယ့်လူ😁" : tt}
                                            </span>
                                            
                                        </div>
                                    </div>
                                )
                            })}


                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>

    )
}

export default Daily;
