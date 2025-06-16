import React, { useEffect } from 'react';
import Level5 from './Level5';
import TimePicker from '../../components/TimePicker';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <TimePicker />
      
      
        
        <Level5 user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level4;
