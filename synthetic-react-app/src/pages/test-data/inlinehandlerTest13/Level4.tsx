import React, { useEffect } from 'react';
import Child from './Child';
import Descriptions from '../../components/Descriptions';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Descriptions />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
