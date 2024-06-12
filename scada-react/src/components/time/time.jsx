import {useState, useEffect} from "react";
import "./time.css";

export default () => {

    const [time, setTime] = useState('');

    useEffect(() => {
        const timer = setInterval(() => tick(), 1000);
    })

    function dec_corr(num) {
        if(num > 9) return num;
        else return "0" + num;
    }

    function getTimeDay(datetime) {
        if(datetime.getHours() < 13) return "AM";
        else return "PM";
    }

    function tick() {
        var datetime = new Date();
        
        setTime(dec_corr(datetime.getHours()) + ":" 
            + dec_corr(datetime.getMinutes()) + ":" 
            + dec_corr(datetime.getSeconds()) + " "
            + getTimeDay(datetime));
    }

    return (
        <div className="time">
            {time}     
        </div>
    )
}