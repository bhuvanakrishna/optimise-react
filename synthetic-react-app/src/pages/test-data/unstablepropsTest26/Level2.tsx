import React, { useEffect } from 'react';
import Child from './Child';
import Checkbox from '../../components/Checkbox';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Checkbox />
      
      
        
        <Child user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level2;
