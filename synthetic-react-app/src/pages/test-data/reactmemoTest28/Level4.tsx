import React, { useEffect } from 'react';
import Child from './Child';
import RangePicker from '../../components/RangePicker';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <RangePicker />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Level4);
