import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest19 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>TooManyEffectsTest19</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest19;
