import React, { useEffect } from 'react';

import Tabs from '../../components/Tabs';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Tabs />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
