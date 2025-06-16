import React from 'react';

const LazyParent = React.lazy(() => import('./Parent'));


const lazyloadingTest25 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>lazyloadingTest25</h2>
      
      <React.Suspense fallback={null}>
        <LazyParent />
      </React.Suspense>
      
    </div>
  );
};

export default lazyloadingTest25;
