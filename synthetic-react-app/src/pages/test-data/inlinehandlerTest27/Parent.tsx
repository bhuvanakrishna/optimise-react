import React, { useEffect } from 'react';
import Level2 from './Level2';
import RadioGroup from '../../components/RadioGroup';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <RadioGroup />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
