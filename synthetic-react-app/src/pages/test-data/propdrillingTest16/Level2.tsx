import React, { useEffect } from 'react';
import Child from './Child';
import Collapse from '../../components/Collapse';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Collapse />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
