import React, { useEffect } from 'react';
import Level3 from './Level3';
import RadioGroup from '../../components/RadioGroup';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <RadioGroup />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
