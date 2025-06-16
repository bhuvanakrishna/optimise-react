import React from 'react';

import Parent from './Parent';


const toomanyeffectsTest1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>toomanyeffectsTest1</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default toomanyeffectsTest1;
