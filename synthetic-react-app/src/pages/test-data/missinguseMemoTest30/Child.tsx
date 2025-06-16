import React, { useEffect } from 'react';

import Descriptions from '../../components/Descriptions';


const Child = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Child</h4>
      
      <Descriptions />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
