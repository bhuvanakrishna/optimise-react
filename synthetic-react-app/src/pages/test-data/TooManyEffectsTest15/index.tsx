import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest15 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>TooManyEffectsTest15</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest15;
