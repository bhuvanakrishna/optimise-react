import React from 'react';
import Parent from './Parent';

const staleclosuresTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>staleclosuresTest4</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default staleclosuresTest4;
