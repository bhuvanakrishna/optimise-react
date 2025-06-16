import React from 'react';

import Parent from './Parent';


const inlinehandlerTest23 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inlinehandlerTest23</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest23;
