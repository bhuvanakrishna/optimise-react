import React, { useEffect } from 'react';
import Level5 from './Level5';
import Collapse from '../../components/Collapse';


const Level4 = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Collapse />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default Level4;
