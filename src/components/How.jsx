// About.js
import React from 'react';

const How = ({ showDevice, toggleDevice }) => {
  // Define your data for 'About'
  const aboutData = {
    summary: {
      announced: {
        title: 'Analyzing Spectrograph',
        value:
          'Our web app employs sophisticated spectrograph analysis to distinguish genuine audio from deepfakes, ensuring unparalleled accuracy in audio verification.',
        icon: '',
      },
      os: {
        title: 'Better Accuracy',
        value:
          'Benefit from the most precise deepfake identification, thanks to our cutting-edge technology, providing unparalleled results in audio analysis.',
        icon: '',
      },
      weight: {
        title: 'User Friendly',
        value:
          'With a sleek and intuitive interface, our web app makes deepfake detection accessible to all users, regardless of their technical expertise.',
        icon: '',
      },
    },
  };

  return (
    <div id="container" data-show={showDevice}>
      <div class="galaxy-container" @click="toggleDevice('galaxy')">
    <div class="title">How this works</div>
    <div class="features">
      <div class="summary">
        <div v-for="(item, key) in how.summary" :class='key'>
          <div class="summary-title">
            {{item.title}}
          </div>
          <div class="summary-value">{{item.value}}</div>
        </div>
      </div>
      <div class="summary-large">
        <div v-for="(item, key) in how.summary_large" :class='key'>
          <div class="summary-large-title">
            {{item.title}}
          </div>
          <div class="summary-large-value">{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
      {/* ... */}
    </div>
  );
};

export default How;
