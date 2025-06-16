import React from 'react';
import Parent from './Parent';

const misuseduseEffectTest3 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>misuseduseEffectTest3</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default misuseduseEffectTest3;
