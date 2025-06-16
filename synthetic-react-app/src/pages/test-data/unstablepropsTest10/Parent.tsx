import React, { useEffect } from 'react';
import Child from './Child';
import Empty from '../../components/Empty';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Empty />
      
      
        
        <Child user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Parent;
