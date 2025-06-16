import React from 'react';

import Parent from './Parent';


const unstablepropsTest24 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest24</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest24;
