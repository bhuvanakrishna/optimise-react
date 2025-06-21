import React from 'react';
import Parent from './Parent';

const UnstablepropsTest8 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest8</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default UnstablepropsTest8;
