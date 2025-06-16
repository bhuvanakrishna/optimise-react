import React, { useEffect } from 'react';
import Level4 from './Level4';
import Checkbox from '../../components/Checkbox';


const Level3 = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Checkbox />
      
      
        
        <Level4 user={props.user} />
        
      
    </div>
  );
};

export default Level3;
