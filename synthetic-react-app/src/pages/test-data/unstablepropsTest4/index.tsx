import React from 'react';
import Parent from './Parent';

const UnstablepropsTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest4</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default UnstablepropsTest4;
