import React, { useEffect } from 'react';
import Child from './Child';
import Slider from '../../components/Slider';


const Level4 = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Slider />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level4;
