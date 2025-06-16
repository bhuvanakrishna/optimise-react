import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest17 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>TooManyEffectsTest17</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest17;
