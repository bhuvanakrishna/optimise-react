import React, { useEffect } from 'react';
import Level4 from './Level4';
import Drawer from '../../components/Drawer';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Drawer />
      
      
        
        <Level4 user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level3;
