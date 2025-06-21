import React from 'react';
import Parent from './Parent';

const PropdrillingTest17 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>propdrillingTest17</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default PropdrillingTest17;
