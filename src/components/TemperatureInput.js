import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };


function TemperatureInput(props) {

    return (
        <div>
             <fieldset>
             <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
             <input
                value={props.temperature}
                onChange={(e)=>props.onTemperatureChange(e.target.value)} />
        </fieldset>
        </div>
    )
}

export default TemperatureInput
