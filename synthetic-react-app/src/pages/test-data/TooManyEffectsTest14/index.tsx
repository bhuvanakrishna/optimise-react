import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest14 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>TooManyEffectsTest14</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest14;
