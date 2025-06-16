import React, { useEffect } from 'react';
import Child from './Child';
import MultiSelect from '../../components/MultiSelect';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <MultiSelect />
      
      
        
        <Child user={props.user} />
        
      
    </div>
  );
};

export default Parent;
