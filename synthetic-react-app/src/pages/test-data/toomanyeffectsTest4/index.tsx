import React from 'react';

import Parent from './Parent';


const toomanyeffectsTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>toomanyeffectsTest4</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default toomanyeffectsTest4;
