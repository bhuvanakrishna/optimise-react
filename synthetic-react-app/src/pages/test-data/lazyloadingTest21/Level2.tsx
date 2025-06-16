import React, { useEffect } from 'react';

import TimePicker from '../../components/TimePicker';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <TimePicker />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
