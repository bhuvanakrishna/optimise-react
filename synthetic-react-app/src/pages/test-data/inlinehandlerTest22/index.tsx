import React from 'react';

import Parent from './Parent';


const inlinehandlerTest22 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinehandlerTest22</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest22;
