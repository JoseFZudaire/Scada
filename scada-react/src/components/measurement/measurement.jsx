import "./measurement.css";
import { Filecontext } from '../fileContext/fileContext';
import { useContext, useState, useEffect } from 'react'
import MeasurementInfo from "../measurementInfo/measurementInfo";

export default (props) => {

    const { measurementType } = useContext(Filecontext);

    const [showPopup, setPopup] = useState(false);

    var unit = "";
    var value = "";

    switch(measurementType) {
        case "Temperature":
            unit = "°C";
            value = props.data.temp;
            break;
        case "Pressure":
            unit = "bar";
            value = props.data.pressure;
            break;
        case "Volume":
            unit = "m3";
            value = props.data.volFlow;
            break;
        case "Flow":
            unit = "m3/s";
            value = props.data.volFlow;
            break;
        case "Sulfur":
            unit = "ppm";
            value = props.data.sulfur;
            break;
        default: 
            unit = "";
            value = "-";
            break;
    }

    return(
        <>
            <button className={showPopup ? "measurementSelected":"measurement"} style={{left: props.posX + "px", 
                top: props.posY + "px", position: "absolute"}}
                onClick={() => setPopup(!showPopup)}>
                    {value} {unit}
            </button>
            {showPopup && <MeasurementInfo posX={parseInt(props.posX)+120} posY={parseInt(props.posY)-50} close={() => setPopup(false)}/>}
        </>
    )
}




