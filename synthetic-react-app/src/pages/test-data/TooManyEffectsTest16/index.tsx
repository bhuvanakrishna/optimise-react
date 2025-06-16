import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest16 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>TooManyEffectsTest16</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest16;
