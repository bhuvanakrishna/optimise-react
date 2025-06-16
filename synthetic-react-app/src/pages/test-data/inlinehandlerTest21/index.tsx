import React from 'react';

import Parent from './Parent';


const inlinehandlerTest21 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inlinehandlerTest21</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest21;
