import React from 'react';
import Parent from './Parent';

const propdrillingTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>propdrillingTest2</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default propdrillingTest2;
