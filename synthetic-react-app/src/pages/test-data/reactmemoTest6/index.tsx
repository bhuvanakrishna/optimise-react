import React from 'react';

import Parent from './Parent';


const reactmemoTest6 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>reactmemoTest6</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default reactmemoTest6;
