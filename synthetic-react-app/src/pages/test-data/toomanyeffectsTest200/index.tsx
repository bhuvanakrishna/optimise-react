import React from 'react';
import Parent from './Parent';

const ToomanyeffectsTest200 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>toomanyeffectsTest200</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default ToomanyeffectsTest200;
