import React from 'react';
import Parent from './Parent';

const misuseduseEffectTest9 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>misuseduseEffectTest9</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default misuseduseEffectTest9;
