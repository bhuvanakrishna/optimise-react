import React from 'react';
import Parent from './Parent';

const PropdrillingTest12 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>propdrillingTest12</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default PropdrillingTest12;
