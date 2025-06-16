import React, { useEffect } from 'react';

import Badge from '../../components/Badge';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Badge />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
