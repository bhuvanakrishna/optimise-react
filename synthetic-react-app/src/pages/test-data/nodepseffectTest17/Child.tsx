import React, { useEffect } from 'react';

import Checkbox from '../../components/Checkbox';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Checkbox />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
