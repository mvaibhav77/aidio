import How from './How';
import About from './About';
import { useState } from 'react';

function Info() {
  const [showDevice, setShowDevice] = useState('');

  const toggleDevice = (device) => {
    if (showDevice === device) {
      setShowDevice('');
      return;
    }

    setShowDevice(device);
  };
  return (
    <div className="App">
      <div className="background"></div>
      <About showDevice={showDevice} toggleDevice={toggleDevice}/>
      <How showDevice={showDevice} toggleDevice={toggleDevice}/>
    </div>
  );
}
export default Info;
