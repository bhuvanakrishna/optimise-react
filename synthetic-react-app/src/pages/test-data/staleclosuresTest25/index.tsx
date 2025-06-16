import React from 'react';
import Parent from './Parent';

const staleclosuresTest25 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>staleclosuresTest25</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default staleclosuresTest25;
