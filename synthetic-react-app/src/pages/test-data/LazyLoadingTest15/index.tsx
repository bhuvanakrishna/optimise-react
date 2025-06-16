import React from 'react';

import Parent from './Parent';


const LazyLoadingTest15 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>LazyLoadingTest15</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default LazyLoadingTest15;
