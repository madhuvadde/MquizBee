import React from 'react'
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { useState } from 'react'
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }


function Calculator() {
   const [temperature, setTemperature] = useState('');
   const [scale, setScale] = useState('c');
   
   const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
   const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
   function handleCelsiusChange(temperature){
       setTemperature(temperature);
       setScale('c');
}

  function handleFahrenheitChange(temperature){
    setTemperature(temperature);
    setScale('f');
  }
    return (
        <div>
            <TemperatureInput scale = 'c' temperature = {celsius}  onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale = 'f' temperature = {fahrenheit}  onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
       
    )
}

export default Calculator
