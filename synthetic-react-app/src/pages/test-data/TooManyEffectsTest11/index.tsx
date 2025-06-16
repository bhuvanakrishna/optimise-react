import React from 'react';

import Parent from './Parent';


const TooManyEffectsTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>TooManyEffectsTest11</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default TooManyEffectsTest11;
