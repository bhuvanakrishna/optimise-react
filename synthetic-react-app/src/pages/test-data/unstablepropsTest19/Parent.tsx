import React, { useEffect } from 'react';
import Level2 from './Level2';
import Descriptions from '../../components/Descriptions';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Descriptions />
      
      
        
        <Level2 user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Parent;
