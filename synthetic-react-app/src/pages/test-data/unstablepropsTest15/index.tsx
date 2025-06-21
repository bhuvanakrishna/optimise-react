import React from 'react';
import Parent from './Parent';

const UnstablepropsTest15 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest15</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default UnstablepropsTest15;
