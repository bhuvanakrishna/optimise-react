import React from 'react';

import Parent from './Parent';


const LazyLoadingTest16 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>LazyLoadingTest16</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default LazyLoadingTest16;
