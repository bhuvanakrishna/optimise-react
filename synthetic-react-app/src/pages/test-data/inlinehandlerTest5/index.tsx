import React from 'react';

import Parent from './Parent';


const inlinehandlerTest5 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inlinehandlerTest5</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest5;
