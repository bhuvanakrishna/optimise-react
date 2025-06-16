import React, { useEffect } from 'react';
import Level3 from './Level3';
import DatePicker from '../../components/DatePicker';


const Level2 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level2</h4>
      
      <DatePicker />
      
      
        
        <Level3 user={props.user} />
        
      
    </div>
  );
};

export default Level2;
