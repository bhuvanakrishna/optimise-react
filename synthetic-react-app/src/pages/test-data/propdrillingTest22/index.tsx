import React from 'react';
import Parent from './Parent';

const PropdrillingTest22 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>propdrillingTest22</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default PropdrillingTest22;
