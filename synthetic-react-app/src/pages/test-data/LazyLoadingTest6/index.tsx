import React from 'react';

const LazyParent = React.lazy(() => import('./Parent'));


const LazyLoadingTest6 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>LazyLoadingTest6</h2>
      
      <React.Suspense fallback={null}>
        <LazyParent />
      </React.Suspense>
      
    </div>
  );
};

export default LazyLoadingTest6;
