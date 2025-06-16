import React, { useEffect } from 'react';

import Card from '../../components/Card';


const Child = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Child</h4>
      
      <Card />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
