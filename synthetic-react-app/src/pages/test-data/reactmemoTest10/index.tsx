import React from 'react';

import Parent from './Parent';


const reactmemoTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>reactmemoTest10</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default reactmemoTest10;
