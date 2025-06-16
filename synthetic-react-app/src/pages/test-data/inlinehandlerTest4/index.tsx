import React from 'react';

import Parent from './Parent';


const inlinehandlerTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinehandlerTest4</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest4;
