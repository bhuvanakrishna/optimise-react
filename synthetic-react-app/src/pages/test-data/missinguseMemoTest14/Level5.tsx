import React, { useEffect } from 'react';
import Child from './Child';
import Switch from '../../components/Switch';


const Level5 = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Level5</h4>
      
      <Switch />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
