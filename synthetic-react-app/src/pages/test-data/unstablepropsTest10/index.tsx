import React from 'react';

import Parent from './Parent';


const unstablepropsTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest10</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest10;
