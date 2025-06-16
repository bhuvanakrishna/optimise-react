import React from 'react';

import Parent from './Parent';


const LazyLoadingTest11 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>LazyLoadingTest11</h2>
      
      <Parent user="test-user" />
      
    </div>
  );
};

export default LazyLoadingTest11;
