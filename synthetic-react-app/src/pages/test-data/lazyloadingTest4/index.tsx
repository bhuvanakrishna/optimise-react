import React from 'react';

const LazyParent = React.lazy(() => import('./Parent'));


const lazyloadingTest4 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>lazyloadingTest4</h2>
      
      <React.Suspense fallback={null}>
        <LazyParent />
      </React.Suspense>
      
    </div>
  );
};

export default lazyloadingTest4;
