import React from 'react';
import Parent from './Parent';

const propdrillingTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>propdrillingTest10</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default propdrillingTest10;
