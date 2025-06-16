import React, { useEffect } from 'react';
import Child from './Child';
import Progress from '../../components/Progress';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Progress />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
