import React from 'react';
import Parent from './Parent';

const PropdrillingTest14 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>propdrillingTest14</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default PropdrillingTest14;
