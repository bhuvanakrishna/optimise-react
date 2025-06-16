import React from 'react';

const LazyParent = React.lazy(() => import('./Parent'));


const lazyloadingTest9 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>lazyloadingTest9</h2>
      
      <React.Suspense fallback={null}>
        <LazyParent />
      </React.Suspense>
      
    </div>
  );
};

export default lazyloadingTest9;
