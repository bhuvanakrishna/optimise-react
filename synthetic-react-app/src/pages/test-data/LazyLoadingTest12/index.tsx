import React from 'react';

import Parent from './Parent';


const LazyLoadingTest12 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>LazyLoadingTest12</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default LazyLoadingTest12;
