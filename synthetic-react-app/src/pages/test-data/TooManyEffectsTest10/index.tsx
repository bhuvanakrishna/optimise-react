import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>TooManyEffectsTest10</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest10;
