import React from 'react';

import Parent from './Parent';


const unstablepropsTest30 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest30</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default unstablepropsTest30;
