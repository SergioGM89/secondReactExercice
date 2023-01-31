import React from "react";
import './styles.css';
import InputRange from "./InputRange";
import PValue from "./PValue";

function showValue(idEl, value) {
    const p = document.querySelector(idEl);
    p.innerHTML = value;
}

function Picker() {
    return (
        <>
            <div className="flex">
                <InputRange name={'hue'} min={0} max={360} showChange = {showValue} />
                <InputRange name={'saturation'} min={0} max={100} showChange = {showValue} />
                <InputRange name={'steps'} min={5} max={100} showChange = {showValue} />
            </div>
            <div className="flex">
                <PValue name={'hue'}/>
                <PValue name={'saturation'}/>
                <PValue name={'steps'}/>
            </div>
        </>
    );
}

export default Picker;