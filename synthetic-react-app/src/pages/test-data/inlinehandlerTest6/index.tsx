import React from 'react';

import Parent from './Parent';


const inlinehandlerTest6 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinehandlerTest6</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest6;
