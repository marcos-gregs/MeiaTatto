// import {dayjs} from 'dayjs';
// import {updateLocal} from 'dayjs/plugin/localizedFormat';
const express = require('express')

const app = express()
const PORT = 8000;

const dayjs = require('dayjs');
const updateLocal = require('dayjs/plugin/localizedFormat')

// let extend_days = dayjs
// let date_format = extend_days().format('LLLL')
// let array_date = date_format.split(',')
// let week_day = array_date[0];
// let month_day = array_date[1];
// let year_hours = array_date[2];



class Dayjs_Extends {

    constructor(){
        this.extend_days =  dayjs
        this.date_format =''
        this.week_day = ''
        this.month_day = ''
        this.year_hours = ''

    }

    Act_Att_dajs()
    {

        this.extend_days.extend(updateLocal)
        this.date_format = this.extend_days().format('LLLL')
        this.week_day = (this.date_format.split(','))[0];
        this.month_day = (this.date_format.split(','))[1];
        this.year_hours = (this.date_format.split(','))[2];
        console.log(this.month_day,this.week_day,this.year_hours)
    }
}


app.get('/',(req,res) => {
    res.send(Dayjs_Extends)
})

app.listen(PORT, ()=>{
    console.log('test')
})

