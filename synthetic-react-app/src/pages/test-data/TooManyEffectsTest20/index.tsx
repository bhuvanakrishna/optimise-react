import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest20 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>TooManyEffectsTest20</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest20;
