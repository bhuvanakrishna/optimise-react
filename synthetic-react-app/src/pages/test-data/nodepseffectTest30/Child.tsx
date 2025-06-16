import React, { useEffect } from 'react';

import Switch from '../../components/Switch';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Switch />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
