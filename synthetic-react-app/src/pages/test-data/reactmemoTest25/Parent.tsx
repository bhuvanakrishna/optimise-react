import React, { useEffect } from 'react';
import Child from './Child';
import Dropdown from '../../components/Dropdown';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <Dropdown />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default React.memo(Parent);
