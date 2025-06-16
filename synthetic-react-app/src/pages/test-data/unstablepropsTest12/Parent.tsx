import React, { useEffect } from 'react';
import Level2 from './Level2';
import MultiSelect from '../../components/MultiSelect';


const Parent = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Parent</h4>
      
      <MultiSelect />
      
      
        
        <Level2 user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Parent;
