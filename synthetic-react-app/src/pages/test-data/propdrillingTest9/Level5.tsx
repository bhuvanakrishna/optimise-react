import React, { useEffect } from 'react';
import Child from './Child';
import Drawer from '../../components/Drawer';


const Level5 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <Drawer />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
