import React, { useEffect } from 'react';
import Child from './Child';
import InputNumber from '../../components/InputNumber';


const Level2 = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <InputNumber />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
