import React, { useEffect } from 'react';

import Checkbox from '../../components/Checkbox';

const LazyChild = React.lazy(() => import('./Child'));


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Checkbox />
      
      
        
        <React.Suspense fallback={null}>
          <LazyChild user={props.user} />
        </React.Suspense>
        
      
    </div>
  );
};

export default Parent;
