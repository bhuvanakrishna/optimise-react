import React from 'react';
import Parent from './Parent';

const staleclosuresTest14 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>staleclosuresTest14</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default staleclosuresTest14;
