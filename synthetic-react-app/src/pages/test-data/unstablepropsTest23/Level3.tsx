import React, { useEffect } from 'react';
import Level4 from './Level4';
import MultiSelect from '../../components/MultiSelect';


const Level3 = (props: any) => {
  
  
  
  return (
    <div>
      <h4>Level3</h4>
      
      <MultiSelect />
      
      
        
        <Level4 user={props.user, data: { value: Math.random() }} />
        
      
    </div>
  );
};

export default Level3;
