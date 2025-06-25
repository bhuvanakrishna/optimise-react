import React from 'react';
import Parent from './Parent';

const ToomanyeffectsTest100 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>toomanyeffectsTest100</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default ToomanyeffectsTest100;
