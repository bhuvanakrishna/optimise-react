import React, { useEffect } from 'react';
import Child from './Child';
import Switch from '../../components/Switch';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Switch />
      
      
        
        <Child user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level3;
