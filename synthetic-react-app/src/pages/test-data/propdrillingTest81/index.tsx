import React from 'react';
import Parent from './Parent';

const PropdrillingTest81 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>propdrillingTest81</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default PropdrillingTest81;
