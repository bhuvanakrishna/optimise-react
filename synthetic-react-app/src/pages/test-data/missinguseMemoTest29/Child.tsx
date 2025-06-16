import React, { useEffect } from 'react';

import Dropdown from '../../components/Dropdown';


const Child = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Child</h4>
      
      <Dropdown />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
