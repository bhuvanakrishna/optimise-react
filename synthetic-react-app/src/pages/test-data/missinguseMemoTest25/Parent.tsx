import React, { useEffect } from 'react';
import Child from './Child';
import DatePicker from '../../components/DatePicker';


const Parent = (props: any) => {
  
  
  
  const expensive = Array.from({ length: 1000 }).reduce((a, _, i) => a + i, 0);
  
  return (
    <div>
      <h4>Parent</h4>
      
      <DatePicker />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
