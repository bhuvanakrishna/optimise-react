import React, { useEffect } from 'react';
import Level3 from './Level3';
import Slider from '../../components/Slider';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <Slider />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
