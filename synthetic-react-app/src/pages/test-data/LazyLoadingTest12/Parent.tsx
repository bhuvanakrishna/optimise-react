import React, { useEffect } from 'react';
import Child from './Child';


const Parent = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Parent</h4>
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
