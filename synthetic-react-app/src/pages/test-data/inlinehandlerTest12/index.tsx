import React from 'react';

import Parent from './Parent';


const inlinehandlerTest12 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinehandlerTest12</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest12;
