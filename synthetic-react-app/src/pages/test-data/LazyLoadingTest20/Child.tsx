import React, { useEffect } from 'react';



const Child = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Child</h4>
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
