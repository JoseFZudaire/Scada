import "./Condenser.css";
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
        fetch('http://localhost:5500/active_measurements_condenser',
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
            <img src="img/condenser.jpg" style={{width: "700px", height: "500px", 
                top: "25px", left: "250px", position: "absolute", display: "flex"}}
                onLoad={() => setIsLoaded(true)}/>
            <div className="condenser">

                {isLoaded && 
                (<>
                    <Measurement posX="315" posY="420" data={measurements}/>
                    <Measurement posX="330" posY="135" data={measurements}/>
                    <Measurement posX="695" posY="130" data={measurements}/>
                    <Measurement posX="725" posY="420" data={measurements}/>
                </>)}
                {/* Boiler */}
            </div>
        </>
    )
}