import React, { useEffect } from 'react';
import Level5 from './Level5';
import Tabs from '../../components/Tabs';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Tabs />
      
      
        
        <Level5 user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level4;
