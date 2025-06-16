import React from 'react';
import Parent from './Parent';

const toomanyeffectsTest27 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>toomanyeffectsTest27</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default toomanyeffectsTest27;
