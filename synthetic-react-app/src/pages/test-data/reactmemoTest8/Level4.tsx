import React, { useEffect } from 'react';
import Child from './Child';
import Button from '../../components/Button';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Button />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level4);
