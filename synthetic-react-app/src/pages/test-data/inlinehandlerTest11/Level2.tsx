import React, { useEffect } from 'react';
import Child from './Child';
import RangePicker from '../../components/RangePicker';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <RangePicker />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Level2;
