import React, { useEffect } from 'react';
import Child from './Child';
import DatePicker from '../../components/DatePicker';


const Level2 = (props: any) => {
  
  
  useEffect(() => {
    console.log('effect runs every render');
  });
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <DatePicker />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
