import React, { useEffect } from 'react';

import Spin from '../../components/Spin';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Spin />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default Level4;
