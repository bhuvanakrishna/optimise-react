import React, { useEffect } from 'react';
import Child from './Child';
import TimePicker from '../../components/TimePicker';


const Level2 = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Level2</h4>
      
      <TimePicker />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
