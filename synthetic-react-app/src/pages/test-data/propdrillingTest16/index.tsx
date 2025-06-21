import React from 'react';
import Parent from './Parent';

const PropdrillingTest16 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>propdrillingTest16</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default PropdrillingTest16;
