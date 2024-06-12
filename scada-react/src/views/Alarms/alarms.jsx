import './alarms.css';
import { Filecontext } from '../../components/fileContext/fileContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from "react";
import Alarm from '../../components/alarm/alarm.jsx';

export default (props) => {

    console.log("AlarmList: " + JSON.stringify(props.alarmList));

    return(
        <div style={{left: props.posX + "px",
            position: "absolute", width: "550px", height: "435px",
            backgroundColor: "white", border: "2px solid black", zIndex: 100, borderRadius: "10px",
            display: "flex", verticalAlign: "middle", alignItems: "center", top: "5vh"}}
        >
            <button className="closeButton" onClick={props.close}>
                <span style={{left: "6px", top: "-5px", position: "absolute", color: "white", zIndex: "110"}}>
                    x
                </span>
            </button>
            <div style={{position: "absolute", display: "flex", textAlign: "center",
                alignItems: "center", left: "44%", top: "30px", fontWeight: "bold", fontSize: "25px"
            }}>
                Alarms
            </div>
            <span>
                <Container  style={{paddingRight: "20px", paddingLeft: "35px", height: "30px", width: "540px",
                    marginTop: "60px", position: "relative"
                }}>
                    <Row style={{position: "sticky"}}>
                        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1} style={{textAlign: "center"}}>Id</Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6} style={{textAlign: "center"}}>Description</Col>
                        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4} style={{textAlign: "left"}}>Date</Col>
                        <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1} style={{textAlign: "center"}}></Col>
                    </Row>
                </Container>
                {(props.alarmList.length == 0) && 
                    (<span style={{color: "lightgrey", textAlign: "center", display: "flex", position: "relative", justifyContent: "center"}}>
                        No active alarms
                    </span>)}
                <Container style={{paddingRight: "20px", paddingLeft: "35px", overflowY: "auto", height: "300px", width: "540px"}}>
                    {props.alarmList.map((alarm,i) => {
                        return(
                            <Alarm 
                                urgency={alarm[1]} 
                                description={alarm[0]} 
                                acknowledge={() => props.set_alarms(
                                    props.alarmList.filter(
                                        (alm) => {return (alm[1] != alarm[1])}
                                    )
                                )}
                                date="Monday"
                                col1_width={1}
                                col2_width={6}
                                col3_width={4}
                                col4_width={1}
                            />
                        )
                    })}
                </Container>
            </span>
        </div>
    )
}