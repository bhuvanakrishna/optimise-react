import React, { useEffect } from 'react';



const Child = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
