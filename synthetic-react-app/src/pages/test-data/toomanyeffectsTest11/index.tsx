import React from 'react';

import Parent from './Parent';


const toomanyeffectsTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>toomanyeffectsTest11</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default toomanyeffectsTest11;
