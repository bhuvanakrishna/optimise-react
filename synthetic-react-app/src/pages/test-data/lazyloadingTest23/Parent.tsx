import React, { useEffect } from 'react';

import Message from '../../components/Message';

const LazyLevel2 = React.lazy(() => import('./Level2'));


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Message />
      
      
        
        <React.Suspense fallback={null}>
          <LazyLevel2 user={props.user} />
        </React.Suspense>
        
      
    </div>
  );
};

export default Parent;
