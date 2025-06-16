import React from 'react';

import Parent from './Parent';


const unstablepropsTest26 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest26</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest26;
