import React from 'react';
import Parent from './Parent';

const toomanyeffectsTest17 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>toomanyeffectsTest17</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default toomanyeffectsTest17;
