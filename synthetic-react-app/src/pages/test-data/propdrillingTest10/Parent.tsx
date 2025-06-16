import React, { useEffect } from 'react';
import Child from './Child';
import RadioGroup from '../../components/RadioGroup';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <RadioGroup />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
