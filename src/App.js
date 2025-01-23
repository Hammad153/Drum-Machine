import React, {useState} from 'react';
import DrumPad from './DrumPad';
import ToggleButton from './ToggleButton';
import Volume from './VolumeControl';

function App() {

  const [initialDisplay, setInitialDisplay] = useState('');
  const [isOn, setIsOn] = useState(true);
  const [volumeValue, setVolumeValue] = useState(50);  

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const handleVolumeChange = (event) => {  
    setVolumeValue(event.target.value);  
    console.log(Number(volumeValue))
  }
  
  const playSound = (e) => {
    let sound;
    switch (e.target.id) {
      case 'Q':
       sound = new Audio("https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3");
        break;
    
      case 'W':
       sound = new Audio('https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3');
        break;
    
      case 'E':
       sound = new Audio('https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3');        
        break;
    
      case 'A':
       sound = new Audio('https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3')
         break;
    
      case 'S':
       sound = new Audio('https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3');
         break;
    
      case 'D':
       sound = new Audio('https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3');
         break;
    
      case 'Z':
       sound = new Audio('https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3');
         break;
    
      case 'X':
       sound = new Audio('https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3');
       break;
    
      case 'C':
        sound = new Audio('https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3')
       break;
    
      default:
        return;
    }
    sound.volume = ((Number(volumeValue)) / 100);
    if (isOn) {
      sound.play().catch((error) => console.error('Audio playback error:', error));
    } 
  }

  const displayPadButton = (e) => {
    setInitialDisplay(e.target.value);
  }

  return (
    <div className='App'>
    <div className="container">
      <div>
        <DrumPad 
           displayPadButton={displayPadButton} 
           playSound={playSound}
        />
      </div>
      <div className='control-center'>
        <ToggleButton 
           value={"Power"} 
           handleToggle={handleToggle} 
           isOn={isOn} 
        />
        <div className='display-field'>
          <p>{initialDisplay}</p>
        </div>
        <Volume 
           volumeValue={volumeValue} 
           handleVolumeChange={handleVolumeChange}
        />
        <ToggleButton 
           value={"Bank"}
        />
      </div>
      </div>
    </div>
  );
}

export default App;
