import React, { useEffect } from 'react';

import Drawer from '../../components/Drawer';


const Child = (props: any) => {
  
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  useEffect(() => {}, []);
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Drawer />
      
      
        <div>User: {props.user}</div>
        
      
    </div>
  );
};

export default Child;
