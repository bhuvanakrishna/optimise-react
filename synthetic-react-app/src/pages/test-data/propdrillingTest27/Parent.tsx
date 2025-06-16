import React, { useEffect } from 'react';
import Level2 from './Level2';
import InputNumber from '../../components/InputNumber';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <InputNumber />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
