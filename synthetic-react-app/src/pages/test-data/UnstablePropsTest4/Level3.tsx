import React, { useEffect } from 'react';
import Child from './Child';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
        
        <Child user={props.user} data={{ value: Math.random() }} />
        
      
    </div>
  );
};

export default Level3;
