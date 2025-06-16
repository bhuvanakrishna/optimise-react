import React from 'react';

import Parent from './Parent';


const LazyLoadingTest19 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>LazyLoadingTest19</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default LazyLoadingTest19;
