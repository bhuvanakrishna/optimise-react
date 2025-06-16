import React, { useEffect } from 'react';
import Child from './Child';
import Button from '../../components/Button';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Button />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
