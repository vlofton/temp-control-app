import React, { useState } from 'react';
import "./index.css";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(32);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === 100) return;
    
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature);

    if(newTemperature >= 70) {
      setTemperatureColor("hot");
    }

    
  };

  const decreaseTemperature = () => { 
    if (temperatureValue === 0) return;


    const newTemperature = temperatureValue - 1;
    setTemperatureValue(newTemperature);
    if(newTemperature <= 55) {
      setTemperatureColor("cold");
    }

  
  };



  return  (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°F</div>
      </div>
      <div className="button-container">
        <button onClick= {increaseTemperature}>+</button>
        <button onClick= {decreaseTemperature}>-</button>
      </div>
    </div>
    
  );
};

export default App;