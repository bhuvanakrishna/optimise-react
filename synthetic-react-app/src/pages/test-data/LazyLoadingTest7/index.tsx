import React from 'react';

const LazyParent = React.lazy(() => import('./Parent'));


const LazyLoadingTest7 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>LazyLoadingTest7</h2>
      
      <React.Suspense fallback={null}>
        <LazyParent />
      </React.Suspense>
      
    </div>
  );
};

export default LazyLoadingTest7;
