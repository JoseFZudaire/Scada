import "./Boiler.css";
import Measurement from "../../components/measurement/measurement.jsx"
import {useState, useEffect, useContext} from "react";
import { Filecontext } from '../../components/fileContext/fileContext';

export default () => {

    const [measurements, setMeasurements] = useState({temp: "-", pressure: "-", volFlow: "-", sulfur: "-"});
    const {disabledOption, setDisabledOption} = useContext(Filecontext)
    const { measurementType, setMeasurementType } = useContext(Filecontext)
    const { selectedOption, selectOption } = useContext(Filecontext); 
    const [isLoaded, setIsLoaded] = useState(false);

    setDisabledOption("Volume");
    selectOption("");

    useEffect(() => {
        selectOption("");
        setMeasurementType("");
        const timer = setInterval(() => getData(), 2000);
    }, []);

    function getData() {
        fetch('http://localhost:5500/active_measurements_boiler',
        {
            method: 'GET',
            headers: { "Content-Type": 'application/json' }
        })
        .then(async(response) => {
            var res = await response.json();
            setMeasurements(res);
        })
        .catch(e => {
            console.log("Error: " + e);
        })
    }

    return (
        <>
            <img src="img/boiler.jpg" style={{minWidth: "700px", maxWidth: "700px", height: "500px", 
                top: "25px", left: "250px", position: "absolute", display: "flex"}} 
                onLoad={() => setIsLoaded(true)}/>
            <div className="boiler">

                {isLoaded && 
                (<>
                    <Measurement posX="340" posY="430" data={measurements}/>
                    <Measurement posX="340" posY="150" data={measurements}/>
                    <Measurement posX="775" posY="295" data={measurements}/>
                    <Measurement posX="775" posY="410" data={measurements}/>
                </>)}
            </div>
        </>
    )
}