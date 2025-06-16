import React, { useEffect } from 'react';
import Child from './Child';
import Empty from '../../components/Empty';


const Level5 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <Empty />
      
      
        
        <Child user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level5;
