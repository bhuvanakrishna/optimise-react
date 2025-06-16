import React, { useEffect } from 'react';
import Child from './Child';
import Drawer from '../../components/Drawer';


const Level4 = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Drawer />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
