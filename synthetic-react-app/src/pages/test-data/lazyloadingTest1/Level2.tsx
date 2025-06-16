import React, { useEffect } from 'react';

import Switch from '../../components/Switch';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Switch />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
