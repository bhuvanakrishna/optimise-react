import React, { useEffect } from 'react';
import Child from './Child';
import Tabs from '../../components/Tabs';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Tabs />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
