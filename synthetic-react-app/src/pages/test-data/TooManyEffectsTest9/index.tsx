import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest9 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>TooManyEffectsTest9</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest9;
