import React, { useEffect } from 'react';

import RadioGroup from '../../components/RadioGroup';


const Level5 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <RadioGroup />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
