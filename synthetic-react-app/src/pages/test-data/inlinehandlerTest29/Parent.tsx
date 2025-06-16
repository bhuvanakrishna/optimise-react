import React, { useEffect } from 'react';
import Level2 from './Level2';
import Checkbox from '../../components/Checkbox';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Checkbox />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
