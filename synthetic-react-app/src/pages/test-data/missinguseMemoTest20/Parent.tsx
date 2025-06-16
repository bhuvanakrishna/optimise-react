import React, { useEffect } from 'react';
import Child from './Child';
import Tabs from '../../components/Tabs';


const Parent = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Tabs />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
