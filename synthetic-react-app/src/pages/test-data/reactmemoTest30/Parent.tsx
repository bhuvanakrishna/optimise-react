import React, { useEffect } from 'react';
import Child from './Child';
import Badge from '../../components/Badge';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Badge />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Parent);
