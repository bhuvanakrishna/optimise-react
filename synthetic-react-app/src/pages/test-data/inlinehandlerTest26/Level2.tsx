import React, { useEffect } from 'react';
import Child from './Child';
import Slider from '../../components/Slider';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Slider />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
