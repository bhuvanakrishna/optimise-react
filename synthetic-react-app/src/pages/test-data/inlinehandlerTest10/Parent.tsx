import React, { useEffect } from 'react';
import Child from './Child';
import Tabs from '../../components/Tabs';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Tabs />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
