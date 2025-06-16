import React from 'react';
import Parent from './Parent';

const misuseduseEffectTest7 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>misuseduseEffectTest7</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default misuseduseEffectTest7;
