import React from 'react';

import Parent from './Parent';


const inlinehandlerTest1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inlinehandlerTest1</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest1;
