import React from 'react';

import Parent from './Parent';


const inlinehandlerTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinehandlerTest10</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest10;
