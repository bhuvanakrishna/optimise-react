import React, { useEffect } from 'react';

import Tag from '../../components/Tag';

const LazyChild = React.lazy(() => import('./Child'));


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Tag />
      
      
        
        <React.Suspense fallback={null}>
          <LazyChild user={props.user} />
        </React.Suspense>
        
      
    </div>
  );
};

export default Parent;
