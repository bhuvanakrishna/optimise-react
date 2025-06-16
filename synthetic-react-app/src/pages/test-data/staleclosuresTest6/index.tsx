import React from 'react';
import Parent from './Parent';

const staleclosuresTest6 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>staleclosuresTest6</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default staleclosuresTest6;
