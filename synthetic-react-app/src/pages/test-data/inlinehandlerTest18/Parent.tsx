import React, { useEffect } from 'react';
import Level2 from './Level2';
import Popover from '../../components/Popover';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Popover />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
