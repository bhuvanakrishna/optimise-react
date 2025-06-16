import React, { useEffect } from 'react';

import Drawer from '../../components/Drawer';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Drawer />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
