import "./Storage.css";
import Measurement from "../../components/measurement/measurement.jsx"
import {useState, useEffect, useContext} from "react";
import { Filecontext } from '../../components/fileContext/fileContext';

export default () => {
    const [measurements, setMeasurements] = useState({temp: "-", pressure: "-", volFlow: "-", sulfur: "-"});
    const {disabledOption, setDisabledOption} = useContext(Filecontext)
    const { measurementType, setMeasurementType } = useContext(Filecontext)
    const { selectedOption, selectOption } = useContext(Filecontext); 
    const [isLoaded, setIsLoaded] = useState(false);

    setDisabledOption("Flow");

    useEffect(() => {
        selectOption("");
        setMeasurementType("");
        const timer = setInterval(() => getData(), 2000);
    }, []);

    function getData() {
        fetch('http://localhost:5500/active_measurements_storage',
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
            <img src="img/storage.jpg" style={{width: "700px", height: "500px", 
                top: "25px", left: "250px", position: "absolute", display: "flex"}}
                onLoad={() => setIsLoaded(true)}/>
            <div>

                {isLoaded && 
                (<>
                    <Measurement posX="348" posY="142" data={measurements}/>
                    <Measurement posX="348" posY="340" data={measurements}/>

                    <Measurement posX="548" posY="142" data={measurements}/>
                    <Measurement posX="548" posY="340" data={measurements}/>

                    <Measurement posX="748" posY="142" data={measurements}/>
                    <Measurement posX="748" posY="340" data={measurements}/>
                </>)}
            </div>
        </>
    )
}