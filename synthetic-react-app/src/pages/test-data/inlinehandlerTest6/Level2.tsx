import React, { useEffect } from 'react';
import Child from './Child';
import Button from '../../components/Button';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Button />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
