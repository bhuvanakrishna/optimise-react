import React, { useEffect } from 'react';
import Level3 from './Level3';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
        
        <Level3 user={props.user} data={{ value: Math.random() }} />
        
      
    </div>
  );
};

export default Level2;
