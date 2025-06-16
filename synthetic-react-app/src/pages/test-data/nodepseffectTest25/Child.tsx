import React, { useEffect } from 'react';

import Input from '../../components/Input';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Input />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
