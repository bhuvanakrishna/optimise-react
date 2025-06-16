import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest7 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>TooManyEffectsTest7</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest7;
