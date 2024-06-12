import "./sideBar.css";
import { Filecontext } from '../fileContext/fileContext';
import { useContext, useState } from 'react'

const options = ["Temperature", "Pressure", "Volume", "Flow", "Sulfur"]

export default () => {

    const { selectedOption, selectOption } = useContext(Filecontext); 
    const { measurementType, setMeasurementType } = useContext(Filecontext)
    const {disabledOption, setDisabledOption} = useContext(Filecontext)

    return (
        <div className="sideBar">
            {
                options.map(option => {
                    if(option==disabledOption) {
                        return (<div>
                            <button className={"disabledOption"} disabled={(option == disabledOption)}>
                                {option}
                            </button>
                        </div>)
                    } else {
                        return (<div>
                            <button className={(option == selectedOption) ? "sideBarOptionSelected" : "sideBarOption" } 
                                onClick={() => {
                                    if(measurementType == option) {
                                        setMeasurementType("");
                                        document.activeElement.blur();
                                        selectOption("");
                                    } else {
                                        setMeasurementType(option);
                                        selectOption(option);
                                    }
                                }} disabled={(option == disabledOption)}>
                                    {option}
                            </button>
                        </div>)
                    }
                })
            }        
        </div>
    )
}



