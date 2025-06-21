import React from 'react';
import Parent from './Parent';

const PropdrillingTest13 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>propdrillingTest13</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default PropdrillingTest13;
