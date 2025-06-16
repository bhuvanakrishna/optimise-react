import React from 'react';

import Parent from './Parent';


const toomanyeffectsTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>toomanyeffectsTest2</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default toomanyeffectsTest2;
