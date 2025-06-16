import React, { useEffect } from 'react';
import Child from './Child';
import Input from '../../components/Input';


const Level4 = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Input />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
