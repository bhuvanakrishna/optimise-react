import React, { useEffect } from 'react';
import Child from './Child';
import Popover from '../../components/Popover';


const Level5 = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <Popover />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
