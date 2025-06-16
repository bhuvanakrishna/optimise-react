import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>TooManyEffectsTest2</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest2;
