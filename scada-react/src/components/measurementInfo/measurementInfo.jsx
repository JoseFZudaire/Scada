import './measurementInfo.css';
import { Filecontext } from '../fileContext/fileContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from "react";

var options = [["Temperature", "°C"], ["Pressure", "bar"], ["Flow", "m3/s"], ["Sulfur","ppm"]]
var value = "100";

export default (props) => {

    const [temp, setTemp] = useState(350);
    const [pressure, setPressure] = useState(75);
    const [flow, setFlow] = useState(4);
    const [sulfur, setSulfur] = useState(100);

    function setValue(measurementType, measurementMov) {
        switch(measurementType) {
            case "Temperature":
                return(setTemp(temp + measurementMov));
                break;
            case "Pressure":
                return(setPressure(pressure + measurementMov));
                break;
            case "Flow":
                return(setFlow(Math.round((flow + (measurementMov/10))*10)/10));
                break;
            case "Sulfur":
                return(setSulfur(sulfur + measurementMov));
                break;
            default:
                alert("error");
                break;
        }
    }

    function getValue(measurementType) {
        switch(measurementType) {
            case "Temperature":
                return(temp);
                break;
            case "Pressure":
                return(pressure);
                break;
            case "Flow":
                return(flow);
                break;
            case "Sulfur":
                return(sulfur);
                break;
            default:
                alert("error");
                break;
        }
    }

    return(
        <div style={{left: props.posX + "px", top: props.posY + "px", 
            position: "absolute", width: "260px", height: "150px",
            backgroundColor: "white", border: "2px solid black", zIndex: 100,
            display: "flex", verticalAlign: "middle", alignItems: "center"}}
        >
            <button className="closeButton" onClick={props.close}>
                <span style={{left: "6px", top: "-5px", position: "absolute", color: "white", zIndex: "101"}}>
                    x
                </span>
            </button>
            <Container style={{paddingRight: "0px", paddingLeft: "0px"}}>
                <Row>
                    <span style={{textAlign: "center", fontWeight: "bold", marginBottom: "2px",
                        top: "0px", position: "relative"
                    }}>
                        Setpoints
                    </span>
                </Row>
                {options.map(option => {
                    return(<Row style={{width: "250px", paddingRight: "0px", paddingLeft: "0px",
                                            marginRight: "0px", marginLeft: "0px"}}>
                        <Col xs={6} style={{paddingRight: "0px", paddingLeft: "0px",
                                marginRight: "0px", marginLeft: "0px"}}>
                            <span style={{marginLeft: "10px"}}>{option[0]}</span>
                        </Col>
                        <Col xs={1} style={{paddingRight: "0px", paddingLeft: "0px",
                                marginRight: "0px", marginLeft: "0px"}}>
                            <button className="spButtonMinus" onClick={() => setValue(option[0], -1)}>
                                <span className="spText">-</span>
                            </button>
                        </Col>

                        <Col xs={4} style={{paddingRight: "0px", paddingLeft: "0px",
                                marginRight: "0px", marginLeft: "0px"}}>
                            <span style={{marginLeft: "5px", marginRight: "0px",
                                marginRight: "13px", marginLeft: "0px", textAlign: "center", 
                                display: "flex", alignItems: "center", display: "flex", 
                                justifyContent: "center"}}>
                                    {getValue(option[0])} {option[1]}
                            </span>
                        </Col>
                        <Col xs={1} style={{paddingRight: "0px", paddingLeft: "0px",
                                marginRight: "0px", marginLeft: "0px"}}>
                            <button className="spButtonPlus" onClick={() => setValue(option[0], 1)}>
                                <span className="spText">+</span>
                            </button>
                        </Col>
                    </Row>)
                })}
            </Container>
        </div>
    )
}