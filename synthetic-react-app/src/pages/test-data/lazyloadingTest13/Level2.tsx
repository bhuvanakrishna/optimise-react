import React, { useEffect } from 'react';

import Tabs from '../../components/Tabs';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Tabs />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
