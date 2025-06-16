import React from 'react';
import Parent from './Parent';

const staleclosuresTest30 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>staleclosuresTest30</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default staleclosuresTest30;
