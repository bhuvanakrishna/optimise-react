import React from 'react';
import Parent from './Parent';

const toomanyeffectsTest24 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>toomanyeffectsTest24</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default toomanyeffectsTest24;
