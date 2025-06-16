import React, { useEffect } from 'react';
import Child from './Child';
import RadioGroup from '../../components/RadioGroup';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <RadioGroup />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
