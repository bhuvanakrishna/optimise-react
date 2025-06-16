import React, { useEffect } from 'react';

import Empty from '../../components/Empty';


const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Empty />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
