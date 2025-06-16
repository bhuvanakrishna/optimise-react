import React, { useEffect } from 'react';
import Child from './Child';
import Progress from '../../components/Progress';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Progress />
      
      
        
        <Child user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Parent;
