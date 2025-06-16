import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest13 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>TooManyEffectsTest13</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest13;
