import React from 'react';

const LazyParent = React.lazy(() => import('./Parent'));


const LazyLoadingTest5 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>LazyLoadingTest5</h2>
      
      <React.Suspense fallback={null}>
        <LazyParent />
      </React.Suspense>
      
    </div>
  );
};

export default LazyLoadingTest5;
