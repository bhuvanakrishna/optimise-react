import React from 'react';

import Parent from './Parent';


const inlinehandlerTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinehandlerTest2</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest2;
