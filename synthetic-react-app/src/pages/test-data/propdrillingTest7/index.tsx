import React from 'react';
import Parent from './Parent';

const PropdrillingTest7 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>propdrillingTest7</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default PropdrillingTest7;
