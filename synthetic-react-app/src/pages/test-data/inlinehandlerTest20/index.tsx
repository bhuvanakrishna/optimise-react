import React from 'react';

import Parent from './Parent';


const inlinehandlerTest20 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinehandlerTest20</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest20;
