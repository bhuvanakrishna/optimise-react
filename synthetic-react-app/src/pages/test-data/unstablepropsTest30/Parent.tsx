import React, { useEffect } from 'react';
import Child from './Child';
import Switch from '../../components/Switch';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Switch />
      
      
        
        <Child user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Parent;
