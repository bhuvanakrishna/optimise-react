import React, { useEffect } from 'react';
import Level4 from './Level4';
import RangePicker from '../../components/RangePicker';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <RangePicker />
      
      
        
        <Level4 user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level3;
