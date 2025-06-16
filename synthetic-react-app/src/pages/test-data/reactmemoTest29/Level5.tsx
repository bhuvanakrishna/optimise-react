import React, { useEffect } from 'react';
import Child from './Child';
import Spin from '../../components/Spin';


const Level5 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level5</h4>
      
      <Spin />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level5);
