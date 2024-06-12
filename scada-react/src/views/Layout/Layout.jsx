import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import NavBar from "../../components/navBar/navBar";
import SideBar from '../../components/sideBar/sideBar';
import { Filecontext } from '../../components/fileContext/fileContext';
import AlarmSideBar from '../../components/alarmsSideBar/alarmsSideBar';

function Layout() {
    const [measurementType, setMeasurementType] = useState("");
    const [disabledOption, setDisabledOption] = useState("");
    const [selectedOption, selectOption] = useState("");

    let navigate = useNavigate(); 
    const routeChange = (onePath) => { 
        navigate(onePath);
    }

    return(
        <>
            <NavBar/> 
            <div className="App">
                <Filecontext.Provider value={{measurementType, setMeasurementType, 
                    disabledOption, setDisabledOption, selectedOption, selectOption
                }}>
                    <SideBar/>
                    <Outlet/>
                    <AlarmSideBar/>
                </Filecontext.Provider> 
            </div>
        </>) 
}

export default Layout;