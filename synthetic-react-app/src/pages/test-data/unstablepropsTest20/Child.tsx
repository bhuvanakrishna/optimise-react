import React, { useEffect } from 'react';

import Popover from '../../components/Popover';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Popover />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
