import React from 'react';

import Parent from './Parent';


const LazyLoadingTest20 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>LazyLoadingTest20</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default LazyLoadingTest20;
