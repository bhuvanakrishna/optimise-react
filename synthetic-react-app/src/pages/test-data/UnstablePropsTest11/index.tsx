import React from 'react';
import Parent from './Parent';

const unstablepropsTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>unstablepropsTest11</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default unstablepropsTest11;
