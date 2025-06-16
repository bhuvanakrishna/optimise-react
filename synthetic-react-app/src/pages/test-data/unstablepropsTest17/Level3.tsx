import React, { useEffect } from 'react';
import Child from './Child';
import Dropdown from '../../components/Dropdown';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <Dropdown />
      
      
        
        <Child user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level3;
