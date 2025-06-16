import React, { useEffect } from 'react';
import Child from './Child';
import Input from '../../components/Input';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Input />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
