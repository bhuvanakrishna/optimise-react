import React, { useEffect } from 'react';
import Child from './Child';
import Popover from '../../components/Popover';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Popover />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
