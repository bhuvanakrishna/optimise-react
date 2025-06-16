import React, { useEffect } from 'react';
import Child from './Child';
import Slider from '../../components/Slider';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Slider />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Parent);
