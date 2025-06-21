import React from 'react';
import Parent from './Parent';

const UnstablepropsTest25 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest25</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default UnstablepropsTest25;
