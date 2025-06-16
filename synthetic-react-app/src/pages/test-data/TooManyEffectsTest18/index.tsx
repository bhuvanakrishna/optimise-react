import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest18 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>TooManyEffectsTest18</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest18;
