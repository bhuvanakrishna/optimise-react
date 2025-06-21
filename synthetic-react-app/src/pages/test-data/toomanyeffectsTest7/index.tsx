import React from 'react';
import Parent from './Parent';

const ToomanyeffectsTest7 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>toomanyeffectsTest7</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default ToomanyeffectsTest7;
