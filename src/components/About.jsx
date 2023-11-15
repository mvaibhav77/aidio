// About.js
import React from 'react';

const About = ({ showDevice, toggleDevice }) => {
  // Define your data for 'About'
  const aboutData = {
    summary: {
      announced: {
        title: "DEEPFAKE DETECTION",
        value: "Introducing our cutting-edge web app! Unmask deepfakes with ease by simply uploading an audio file. Using advanced spectrograph analysis, we accurately determine whether the audio is genuine or digitally altered. Protect your trust and authenticity with our reliable deepfake detection solution.",
        icon: ""
      },
    }
  };

  return (
    <div id="container" data-show={showDevice}>
      <div class="iphone-container" @click="toggleDevice('iphone')">
    <div class="title">About</div>
    <div class="features">
      <div class="summary">
        <div v-for="(item, key) in about.summary" :class='key'>
          <div class="summary-title">
            {{item.title}}
          </div>
          <div class="summary-value">{{item.value}}</div>
        </div>
      </div>
      <div class="summary-large">
        <div v-for="(item, key) in about.summary_large" :class='key'>
          <div class="summary-large-title">
            {{item.title}}
          </div>
          <div class="summary-large-value">{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default About;
