import React from 'react';

import Parent from './Parent';


const inlinehandlerTest7 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inlinehandlerTest7</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest7;
