import React, { useEffect } from 'react';

import Progress from '../../components/Progress';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Progress />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
