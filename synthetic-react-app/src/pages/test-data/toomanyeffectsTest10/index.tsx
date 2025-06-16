import React from 'react';

import Parent from './Parent';


const toomanyeffectsTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>toomanyeffectsTest10</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default toomanyeffectsTest10;
