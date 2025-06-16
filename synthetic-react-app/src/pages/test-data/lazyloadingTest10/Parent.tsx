import React, { useEffect } from 'react';

import DatePicker from '../../components/DatePicker';

const LazyChild = React.lazy(() => import('./Child'));


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <DatePicker />
      
      
        
        <React.Suspense fallback={null}>
          <LazyChild user={props.user} />
        </React.Suspense>
        
      
    </div>
  );
};

export default Parent;
