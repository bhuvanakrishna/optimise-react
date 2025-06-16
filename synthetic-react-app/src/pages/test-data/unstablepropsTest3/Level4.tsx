import React, { useEffect } from 'react';
import Child from './Child';
import Collapse from '../../components/Collapse';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Collapse />
      
      
        
        <Child user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level4;
