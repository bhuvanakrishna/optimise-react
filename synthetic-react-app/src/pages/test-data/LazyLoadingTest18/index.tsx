import React from 'react';

import Parent from './Parent';


const LazyLoadingTest18 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>LazyLoadingTest18</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default LazyLoadingTest18;
