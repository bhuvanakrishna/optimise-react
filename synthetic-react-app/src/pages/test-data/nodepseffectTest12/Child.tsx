import React, { useEffect } from 'react';

import Tooltip from '../../components/Tooltip';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Tooltip />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
