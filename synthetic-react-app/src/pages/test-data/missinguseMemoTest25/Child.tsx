import React, { useEffect } from 'react';

import Popover from '../../components/Popover';


const Child = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Child</h4>
      
      <Popover />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
