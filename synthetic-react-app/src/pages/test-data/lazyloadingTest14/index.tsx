import React from 'react';

const LazyParent = React.lazy(() => import('./Parent'));


const lazyloadingTest14 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h2>lazyloadingTest14</h2>
      
      <React.Suspense fallback={null}>
        <LazyParent />
      </React.Suspense>
      
    </div>
  );
};

export default lazyloadingTest14;
