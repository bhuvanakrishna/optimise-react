import React, { useEffect } from 'react';
import Child from './Child';
import Button from '../../components/Button';


const Level3 = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Button />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level3;
