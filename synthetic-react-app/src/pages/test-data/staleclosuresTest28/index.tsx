import React from 'react';
import Parent from './Parent';

const staleclosuresTest28 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>staleclosuresTest28</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default staleclosuresTest28;
