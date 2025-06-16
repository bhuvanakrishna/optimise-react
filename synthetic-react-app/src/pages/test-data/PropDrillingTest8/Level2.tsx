import React, { useEffect } from 'react';
import Child from './Child';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
