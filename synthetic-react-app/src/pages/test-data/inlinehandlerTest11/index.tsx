import React from 'react';

import Parent from './Parent';


const inlinehandlerTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>inlinehandlerTest11</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest11;
