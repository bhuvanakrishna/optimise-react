import React from 'react';
import Parent from './Parent';

const staleclosuresTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>staleclosuresTest11</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default staleclosuresTest11;
