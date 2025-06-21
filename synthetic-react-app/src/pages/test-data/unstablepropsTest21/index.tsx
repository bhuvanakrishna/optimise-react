import React from 'react';
import Parent from './Parent';

const UnstablepropsTest21 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest21</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default UnstablepropsTest21;
