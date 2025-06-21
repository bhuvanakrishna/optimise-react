import React from 'react';
import Parent from './Parent';

const MisuseduseEffectTest1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>misuseduseEffectTest1</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default MisuseduseEffectTest1;
