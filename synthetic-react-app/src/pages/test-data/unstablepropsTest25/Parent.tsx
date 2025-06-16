import React, { useEffect } from 'react';
import Child from './Child';
import BackTop from '../../components/BackTop';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <BackTop />
      
      
        
        <Child user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Parent;
