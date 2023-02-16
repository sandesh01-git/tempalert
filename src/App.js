import React, { useEffect } from "react";
// import audioUrl from './assets/audio/DJsnake.m4a'
// import audioUrl2 from './assets/audio/FIFA18.m4a'
// import audioUrl1 from './assets/audio/ISHAR.m4a'
// import audioUrl3 from './assets/audio/JOSH.m4a'


import { useState } from "react";
const App = () =>{



const[temperatureValue, setTemperatureValue] = useState(10);
const [temperatureColor, setTemperatureColor] = useState("cold");


const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387')
const audio1 = new Audio('https://www.fesliyanstudios.com/play-mp3/388')
const audio2 = new Audio('https://www.fesliyanstudios.com/play-mp3/389')

useEffect(() => {
  if (temperatureValue < 15) {
    setTemperatureColor('cold');
    audio.play();
  } else if (temperatureValue >= 15 && temperatureValue < 25) {
    setTemperatureColor('hot');
    audio1.play();
  } else if (temperatureValue >= 25) {
    setTemperatureColor('superhot');
    audio2.play();
  }
}, [temperatureValue]);

const increaseTemperature = () =>{
  if(temperatureValue>=35)return
setTemperatureValue(temperatureValue+1)

};
const decreaseTemperature = () =>{
  if(temperatureValue<=0)return
  setTemperatureValue(temperatureValue-1)


};



  return(
    
    <>
<div className="app-container">
  <div className="temperature-display-container">
    {/* <div className={`temperature-display  ${temperatureColor}`}>{temperatureValue}°C</div> */}
    <div className={`tempdisplaycoler ${temperatureColor}`}></div>

  </div>

  <div className="button-container">
  {/* <audio controls>
        <source src={audioUrl1} type="audio/mpeg" />
      </audio> */}
    <button onClick={() => increaseTemperature() }>  + </button>
    <h1 className="temperature-display ">{temperatureValue}°C</h1>
 <button onClick={ () =>decreaseTemperature()}> - </button>

  </div>


</div>
    </>
  )
}

export default App;