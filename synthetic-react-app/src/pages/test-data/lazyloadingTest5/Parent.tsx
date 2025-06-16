import React, { useEffect } from 'react';

import Avatar from '../../components/Avatar';

const LazyChild = React.lazy(() => import('./Child'));


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Avatar />
      
      
        
        <React.Suspense fallback={null}>
          <LazyChild user={props.user} />
        </React.Suspense>
        
      
    </div>
  );
};

export default Parent;
