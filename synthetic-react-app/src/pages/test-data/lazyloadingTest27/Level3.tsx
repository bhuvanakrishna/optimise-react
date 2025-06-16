import React, { useEffect } from 'react';

import Checkbox from '../../components/Checkbox';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Checkbox />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level3;
