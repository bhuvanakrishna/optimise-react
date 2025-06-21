import React from 'react';
import Parent from './Parent';

const UnstablepropsTest2 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest2</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default UnstablepropsTest2;
