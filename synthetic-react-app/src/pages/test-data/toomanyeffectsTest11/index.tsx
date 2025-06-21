import React from 'react';
import Parent from './Parent';

const ToomanyeffectsTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>toomanyeffectsTest11</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default ToomanyeffectsTest11;
