import React, { useEffect } from 'react';

import Spin from '../../components/Spin';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Spin />
      
      
        
        <Level4 user={props.user} />
        
      
    </div>
  );
};

export default Level3;
