import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./alarmsSideBar.css";
import Alarm from '../alarm/alarm.jsx';
import AlarmView from '../../views/Alarms/alarms.jsx';

import {useState, useEffect} from "react";

export default () => {

    useEffect(() => {
        try {
            fetch('http://localhost:5500/active_alarms',
            {
                method: 'GET',
                headers: { "Content-Type": 'application/json' }
            })
            .then(async(response) => {
                setAlarms((await response.json()).valor)
            })
            .catch(e => {
                console.log("Error: " + e);
            })
        }
        catch(e) {
            console.log("Error: " + e);
        }

    }, []);

    const [alarms, setAlarms] = useState([["Trip1","100"], ["Alert2","305"], 
                                        ["Alarm4","416"], ["Alarm4","417"]]);

    const [showAlarms, setShowAlarms] = useState(false);   

    return (
        <>
            {showAlarms && (<AlarmView posX={320} alarmList={alarms} close={() => setShowAlarms(false)} set_alarms={(alrms) => setAlarms(alrms)}/>)}
            <div className="alarmsSideBar">
                {
                    <Container style={{width: "100%", height: "100%", position: "absolute", paddingLeft: "30px",
                            paddingRight: "30px"}}>
                        <Row>
                            <Col style={{textAlign: "center", paddingTop: "15px", paddingBottom: "8px",
                                fontWeight: "bold"}}>
                                    Alarms
                            </Col>
                        </Row>
                        <Row style={{paddingBottom: "5px"}}>
                            <Col xl={2} lg={2} md={2} sm={2} xs={2} style={{textAlign: "center"}}>Id</Col>
                            <Col xl={6} lg={6} md={6} sm={6} xs={6}>Description</Col>
                            <Col/>                        
                        </Row>
                        {
                            alarms.map((alarm,i) => {
                                if(i < 7) {
                                    return(
                                        <Alarm 
                                            urgency={alarm[1]} 
                                            description={alarm[0]} 
                                            acknowledge={() => setAlarms(
                                                alarms.filter(
                                                    (alm) => {return (alm[1] != alarm[1])}
                                                )
                                            )}
                                            col1_width={2}
                                            col2_width={6}
                                            col4_width={4}
                                        />
                                    )
                                }
                            })
                        }
                        {(alarms.length == 0) && (<span style={{color: "lightgrey"}}>No active alarms</span>)}
                        <Row style={{position: "absolute", bottom: "20px", right: "35px"}}>
                            <button className="button" onClick={() => setShowAlarms(!showAlarms)}>See more</button>
                        </Row>
                    </Container>
                }        
            </div>
        </>
    )
}