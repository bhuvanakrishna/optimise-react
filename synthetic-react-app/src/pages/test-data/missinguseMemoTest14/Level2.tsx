import React, { useEffect } from 'react';
import Level3 from './Level3';
import InputNumber from '../../components/InputNumber';


const Level2 = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Level2</h4>
      
      <InputNumber />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
