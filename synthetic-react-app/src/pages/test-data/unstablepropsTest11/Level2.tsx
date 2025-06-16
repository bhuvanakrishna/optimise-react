import React, { useEffect } from 'react';
import Child from './Child';
import Badge from '../../components/Badge';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Badge />
      
      
        
        <Child user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level2;
