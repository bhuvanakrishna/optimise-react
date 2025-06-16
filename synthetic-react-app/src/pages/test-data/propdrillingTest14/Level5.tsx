import React, { useEffect } from 'react';
import Child from './Child';
import Tabs from '../../components/Tabs';


const Level5 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <Tabs />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level5;
