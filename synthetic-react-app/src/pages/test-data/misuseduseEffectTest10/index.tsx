import React from 'react';
import Parent from './Parent';

const misuseduseEffectTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>misuseduseEffectTest10</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default misuseduseEffectTest10;
