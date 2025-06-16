import React from 'react';

import Parent from './Parent';


const LazyLoadingTest13 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>LazyLoadingTest13</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default LazyLoadingTest13;
