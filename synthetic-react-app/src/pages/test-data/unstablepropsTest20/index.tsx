import React from 'react';

import Parent from './Parent';


const unstablepropsTest20 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest20</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest20;
