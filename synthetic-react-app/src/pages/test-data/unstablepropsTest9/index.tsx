import React from 'react';
import Parent from './Parent';

const UnstablepropsTest9 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest9</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default UnstablepropsTest9;
