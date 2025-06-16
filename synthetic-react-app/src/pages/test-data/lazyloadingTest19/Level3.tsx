import React, { useEffect } from 'react';

import DatePicker from '../../components/DatePicker';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <DatePicker />
      
      
        
        <Level4 user={props.user} />
        
      
    </div>
  );
};

export default Level3;
