import React from 'react';

import Parent from './Parent';


const inlinehandlerTest13 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inlinehandlerTest13</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest13;
