import React from 'react';
import Parent from './Parent';

const misuseduseEffectTest6 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>misuseduseEffectTest6</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default misuseduseEffectTest6;
