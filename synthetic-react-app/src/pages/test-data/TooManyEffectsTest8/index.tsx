import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest8 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>TooManyEffectsTest8</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest8;
