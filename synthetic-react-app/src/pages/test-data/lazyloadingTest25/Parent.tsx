import React, { useEffect } from 'react';

import Affix from '../../components/Affix';

const LazyChild = React.lazy(() => import('./Child'));


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Affix />
      
      
        
        <React.Suspense fallback={null}>
          <LazyChild user={props.user} />
        </React.Suspense>
        
      
    </div>
  );
};

export default Parent;
