import React, { useEffect } from 'react';
import Child from './Child';
import Badge from '../../components/Badge';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Badge />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
