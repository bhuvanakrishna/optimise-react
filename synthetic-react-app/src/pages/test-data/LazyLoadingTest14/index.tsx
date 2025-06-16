import React from 'react';

import Parent from './Parent';


const LazyLoadingTest14 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>LazyLoadingTest14</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default LazyLoadingTest14;
