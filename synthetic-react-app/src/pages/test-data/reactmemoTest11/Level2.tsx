import React, { useEffect } from 'react';
import Child from './Child';
import Progress from '../../components/Progress';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Progress />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level2);
