import React from 'react';
import Parent from './Parent';

const misuseduseEffectTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>misuseduseEffectTest4</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default misuseduseEffectTest4;
