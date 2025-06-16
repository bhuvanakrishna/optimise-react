import React from 'react';

import Parent from './Parent';


const toomanyeffectsTest3 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>toomanyeffectsTest3</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default toomanyeffectsTest3;
