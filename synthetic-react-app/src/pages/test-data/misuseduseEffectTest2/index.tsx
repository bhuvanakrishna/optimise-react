import React from 'react';
import Parent from './Parent';

const misuseduseEffectTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>misuseduseEffectTest2</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default misuseduseEffectTest2;
