import React from 'react';
import Parent from './Parent';

const ToomanyeffectsTest262 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>toomanyeffectsTest262</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default ToomanyeffectsTest262;
