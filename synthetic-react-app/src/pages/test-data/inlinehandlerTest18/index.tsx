import React from 'react';

import Parent from './Parent';


const inlinehandlerTest18 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>inlinehandlerTest18</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default inlinehandlerTest18;
