import React, { useEffect } from 'react';
import Child from './Child';
import DatePicker from '../../components/DatePicker';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <DatePicker />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level3;
