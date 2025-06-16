import React, { useEffect } from 'react';
import Level5 from './Level5';
import Select from '../../components/Select';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Select />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default Level4;
