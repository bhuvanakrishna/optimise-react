import React from 'react';

import Parent from './Parent';


const unstablepropsTest18 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest18</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest18;
