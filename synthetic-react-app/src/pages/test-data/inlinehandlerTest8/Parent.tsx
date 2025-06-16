import React, { useEffect } from 'react';
import Level2 from './Level2';
import Dropdown from '../../components/Dropdown';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Dropdown />
      
      
        
        <Level2 user={props.user} />
        
      
    </div>
  );
};

export default Parent;
