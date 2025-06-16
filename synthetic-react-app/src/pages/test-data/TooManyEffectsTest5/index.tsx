import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest5 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>TooManyEffectsTest5</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest5;
