import React, { useEffect } from 'react';

import RangePicker from '../../components/RangePicker';


const Level5 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <RangePicker />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
