import React, { useEffect } from 'react';
import Level5 from './Level5';
import Dropdown from '../../components/Dropdown';


const Level4 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level4</h4>
      
      <Dropdown />
      
      
        
        <Level5 user={props.user} />
        
      
    </div>
  );
};

export default Level4;
