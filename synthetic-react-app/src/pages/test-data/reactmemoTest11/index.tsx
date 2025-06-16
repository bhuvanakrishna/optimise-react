import React from 'react';

import Parent from './Parent';


const reactmemoTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>reactmemoTest11</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default reactmemoTest11;
