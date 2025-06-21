import React from 'react';
import Parent from './Parent';

const StaleclosuresTest1 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>staleclosuresTest1</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default StaleclosuresTest1;
