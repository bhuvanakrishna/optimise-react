import React, { useEffect } from 'react';
import Child from './Child';
import Badge from '../../components/Badge';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Badge />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level3;
