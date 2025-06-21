import React from 'react';
import Parent from './Parent';

const UnstablepropsTest30 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>unstablepropsTest30</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default UnstablepropsTest30;
