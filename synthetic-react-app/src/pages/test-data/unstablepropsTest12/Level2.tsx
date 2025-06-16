import React, { useEffect } from 'react';
import Level3 from './Level3';
import Tooltip from '../../components/Tooltip';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Tooltip />
      
      
        
        <Level3 user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level2;
