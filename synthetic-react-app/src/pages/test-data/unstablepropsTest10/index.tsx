import React from 'react';
import Parent from './Parent';

const UnstablepropsTest10 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest10</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default UnstablepropsTest10;
