import React from 'react';
import Parent from './Parent';

const staleclosuresTest3 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>staleclosuresTest3</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default staleclosuresTest3;
