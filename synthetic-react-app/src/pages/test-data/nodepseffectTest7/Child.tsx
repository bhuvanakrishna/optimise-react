import React, { useEffect } from 'react';

import Avatar from '../../components/Avatar';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Avatar />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
