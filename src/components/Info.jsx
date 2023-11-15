// App.js
import React, { useState } from 'react';
// import './App.css'; // Import your CSS file
import About from './About';
import How from './How'; // Create separate components for 'About' and 'How this works'

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
      <a
        target="_top"
        id="twitter"
        href="https://twitter.com/intent/follow?screen_name=kalimahapps&tw_p=followbutton"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <About showDevice={showDevice} toggleDevice={toggleDevice} />
      <How showDevice={showDevice} toggleDevice={toggleDevice} />
      {/* Create a similar component for 'How this works' */}
    </div>
  );
}

export default Info;
