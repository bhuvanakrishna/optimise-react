import React, { useEffect } from 'react';
import Child from './Child';
import Spin from '../../components/Spin';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Spin />
      
      
        
        <Child user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level3;
