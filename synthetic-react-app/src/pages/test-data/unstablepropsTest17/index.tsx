import React from 'react';
import Parent from './Parent';

const UnstablepropsTest17 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest17</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default UnstablepropsTest17;
