import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>TooManyEffectsTest4</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest4;
