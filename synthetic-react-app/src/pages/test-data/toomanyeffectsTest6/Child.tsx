import React, { useEffect } from 'react';

import Collapse from '../../components/Collapse';


const Child = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Collapse />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
