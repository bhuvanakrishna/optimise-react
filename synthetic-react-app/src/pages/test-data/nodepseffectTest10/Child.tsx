import React, { useEffect } from 'react';

import Card from '../../components/Card';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Card />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
