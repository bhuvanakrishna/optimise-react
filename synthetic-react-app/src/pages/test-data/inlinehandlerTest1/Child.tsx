import React, { useEffect } from 'react';

import Drawer from '../../components/Drawer';


const Child = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Child</h4>
      
      <Drawer />
      
      
        <div>User: {props.user}</div>
        
        <button onClick={() => console.log('clicked')}>Click</button>
        
      
    </div>
  );
};

export default Child;
