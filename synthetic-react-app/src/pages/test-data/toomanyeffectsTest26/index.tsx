import React from 'react';
import Parent from './Parent';

const toomanyeffectsTest26 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>toomanyeffectsTest26</h2>
      <Parent user={{ name: 'Krishna' }} />
    </div>
  );
};

export default toomanyeffectsTest26;
