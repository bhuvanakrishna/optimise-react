import React, { useEffect } from 'react';



const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
        <div>User: {props.user}</div>
        
        <button onClick={() => console.log('clicked')}>Click</button>
        
      
    </div>
  );
};

export default Child;
