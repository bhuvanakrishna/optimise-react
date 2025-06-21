import React from 'react';
import Parent from './Parent';

const PropdrillingTest20 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>propdrillingTest20</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default PropdrillingTest20;
