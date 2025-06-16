import React from 'react';

import Parent from './Parent';


const inlinehandlerTest8 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinehandlerTest8</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest8;
