import React, { useEffect } from 'react';

import RadioGroup from '../../components/RadioGroup';


const Child = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Child</h4>
      
      <RadioGroup />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
