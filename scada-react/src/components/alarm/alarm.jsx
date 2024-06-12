import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./alarm.css";
import {useState} from "react";

export default (props) => {

    const [status, setStatus] = useState(true);

    var urgency_level = "";

    switch(true) {
        case (parseInt(props.urgency) < 200):
            urgency_level = "event"
            break;
        case (parseInt(props.urgency) < 400):
            urgency_level = "warning"
            break;
        case (parseInt(props.urgency) >= 400):
            urgency_level = "alarm"
            break;
        default:
            console.log(props.urgency);
            alert("There is no classification for this type of urgency");
    }
    
    return(
        <Row className={urgency_level}>
            <Col xl={props.col1_width} lg={props.col1_width} md={props.col1_width}
                    sm={props.col1_width} xs={props.col1_width} style={{textAlign: "center", padding: "0px"}}>
                {props.urgency}
            </Col>
            <Col xl={props.col2_width} lg={props.col2_width} md={props.col2_width}
                    sm={props.col2_width} xs={props.col2_width} >
                {props.description}
            </Col>
            {(props.date != undefined) && (<Col xl={props.col3_width} lg={props.col3_width} md={props.col3_width}
                    sm={props.col3_width} xs={props.col3_width}>{props.date}</Col>)}
            <Col xl={props.col4_width} lg={props.col4_width} md={props.col4_width}
                    sm={props.col4_width} xs={props.col4_width} style={{padding: "0px", marginRight: "0px", textAlign: "right", display: "block"}}>
                <button className='button' style={{borderRadius: "7px"}} onClick={props.acknowledge}>
                    <span style={{marginBottom: "5px", fontSize: "15px"}}>
                            Ack
                    </span>
                </button>
            </Col>
        </Row>        
    )

}
