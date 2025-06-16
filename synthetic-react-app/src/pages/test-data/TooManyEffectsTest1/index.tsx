import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>TooManyEffectsTest1</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest1;
