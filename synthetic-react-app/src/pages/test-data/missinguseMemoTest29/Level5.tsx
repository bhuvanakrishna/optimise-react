import React, { useEffect } from 'react';
import Child from './Child';
import Tag from '../../components/Tag';


const Level5 = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Level5</h4>
      
      <Tag />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
