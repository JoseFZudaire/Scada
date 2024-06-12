import "./navBar.css";
import Time from "../time/time";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const options = ["Boiler", "Condenser", "Distillation", "Storage"]

export default () => {
    let navigate = useNavigate(); 
    const routeChange = (onePath) => { 
        navigate(onePath);
    }

    const [clicked, setClicked] = useState(false);
    const [selectedOption, selectOption] = useState("");  

    function comparison(option) {
        if(option == "Boiler") return true;
        else return false;
    }

    return (
        <div className="navBar">
            <div className="logo">
                <img src="./img/scada.jpg" style={{width: "200px", height: "50px", marginTop: "5px"}}/>
            </div>

            {options.map(option => {
                return(<button className={(option == selectedOption) ? "navBarOptionSelected" : "navBarOption"} 
                            onClick={() => {
                                if(option != selectedOption) selectOption(option);
                                routeChange('/' + option.toLowerCase());
                            }}>
                                {option}
                        </button>)
            })}

            <Time/>
        </div>
    )
}

