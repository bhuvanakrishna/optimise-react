import React from 'react';

const LazyParent = React.lazy(() => import('./Parent'));


const LazyLoadingTest3 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>LazyLoadingTest3</h2>
      
      <React.Suspense fallback={null}>
        <LazyParent />
      </React.Suspense>
      
    </div>
  );
};

export default LazyLoadingTest3;
