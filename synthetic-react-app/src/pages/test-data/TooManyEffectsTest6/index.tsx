import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest6 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>TooManyEffectsTest6</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest6;
