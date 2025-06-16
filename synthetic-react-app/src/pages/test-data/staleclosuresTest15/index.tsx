import React from 'react';
import Parent from './Parent';

const staleclosuresTest15 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>staleclosuresTest15</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default staleclosuresTest15;
