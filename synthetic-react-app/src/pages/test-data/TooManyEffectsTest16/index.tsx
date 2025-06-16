import React from 'react';
import Parent from './Parent';

const toomanyeffectsTest16 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>toomanyeffectsTest16</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default toomanyeffectsTest16;
