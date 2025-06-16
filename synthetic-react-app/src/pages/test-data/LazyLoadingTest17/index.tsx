import React from 'react';

import Parent from './Parent';


const LazyLoadingTest17 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>LazyLoadingTest17</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default LazyLoadingTest17;
