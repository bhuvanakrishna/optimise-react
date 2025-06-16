import React from 'react';
import Parent from './Parent';

const propdrillingTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>propdrillingTest11</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default propdrillingTest11;
